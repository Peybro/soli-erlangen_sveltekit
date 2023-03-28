import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '$lib/services/firebase';

// See https://zod.dev/?id=primitives for schema syntax
const schema = z.object({
	enabled: z.boolean().default(false),
	title: z.string().min(6).default('[Titel]'),
	description: z.string().min(6).optional().default('[Beschreibung]]'),
	bgColor: z.string().default('success'),
	password: z.string()
});

export const load = (async (event) => {
	const docRef = doc(db, 'banner', 'settings');
	const docSnap = await getDoc(docRef);

	// if (docSnap.exists()) {
	// 	schema.parse({
	// 		enabled: docSnap.data().enabled,
	// 		title: docSnap.data().title,
	// 		description: docSnap.data().description,
	// 		bgColor: docSnap.data().bgColor,
	// 		password: ''
	// 	});
	// } else {
	// 	console.log('No such document!');
	// }

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
}) satisfies PageServerLoad;

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

		// TODO: Do something with the validated data
		// const auth = getAuth();
		const pw = form.data.password;
		let wrongPasswordError = false;

		await signInWithEmailAndPassword(auth, 'vorstand@soli-erlangen.de', pw)
			.then(async (userCredential) => {
				//? Signed in
				// const user = userCredential.user;
				// console.log(user);
				await setDoc(doc(db, 'banner', 'settings'), {
					enabled: form.data.enabled,
					title: form.data.title,
					description: form.data.description,
					bgColor: form.data.bgColor
				});
			})
			.catch((error) => {
				wrongPasswordError = true;
				// errors.code = error.code;
				form.valid = false;
				form.errors.password = [
					// error.message
					'Falsches Passwort!'
				];
			});

		if (wrongPasswordError) return fail(403, { form });

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
