import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '$lib/services/firebase';

// See https://zod.dev/?id=primitives for schema syntax
const schema = z.object({
	enabled: z.boolean().default(false),
	title: z.string().min(6).default('[Titel]'),
	description: z.string().min(6).optional().default('[Beschreibung]]'),
	bgColor: z.string().default('success')
});

export const load = async (event) => {
	const docRef = doc(db, 'banner', 'settings');
	const docSnap = await getDoc(docRef);

	// Server API:
	const form = await superValidate(
		event,
		docSnap.exists()
			? z.object({
					enabled: z.boolean().default(docSnap.data().enabled),
					title: z.string().min(6).default(docSnap.data().title),
					description: z.string().min(6).optional().default(docSnap.data().description),
					bgColor: z.string().default(docSnap.data().bgColor),
					password: z.string()
			  })
			: schema
	);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async (event) => {
		// Same syntax as in the load function
		const form = await superValidate(event, schema);
		// console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// Do something with the validated data
		await setDoc(doc(db, 'banner', 'settings'), {
			enabled: form.data.enabled,
			title: form.data.title,
			description: form.data.description,
			bgColor: form.data.bgColor
		});

		// Yep, return { form } here too
		return { form };
	}
};
