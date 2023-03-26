import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '$lib/services/firebase';

export const load = (async (event) => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	uploadPDF: async ({ request }) => {
		const data = await request.formData();

		const path = data.get('path');

		const seasonFrom = data.get('seasonFrom')?.toString();
		const seasonTo = data.get('seasonTo')?.toString();
		const yearFrom = data.get('yearFrom')?.toString();
		const yearTo = data.get('yearTo')?.toString();
		const password = data.get('password')?.toString();

		console.table({ path: path?.toString(), seasonFrom, seasonTo, yearFrom, yearTo, password });

		const uploadRef = ref(storage, 'Vereinsblatt/test.pdf');

		const auth = getAuth();
		let wrongPasswordError = false;
		let wrongPasswordErrorMessage = '';

		await signInWithEmailAndPassword(auth, 'vorstand@soli-erlangen.de', password || '')
			.then(async (userCredential) => {
				//? Signed in
				// const user = userCredential.user;
				// console.log(user);

				if (path !== null) {
					const pdfFile = new File([path], 'test.pdf', { type: 'application/pdf' });
					// console.log(pdfFile);

					await uploadBytes(uploadRef, pdfFile)
						.then((snapshot) => {
							console.log('Uploaded a blob or file!', snapshot.ref.fullPath);
						})
						.catch((error) => {
							console.log(error);
						});
				}
			})
			.catch((error) => {
				wrongPasswordError = true;
				wrongPasswordErrorMessage = error.message;
				console.log(error);

				// errors.code = error.code;
				// form.valid = false;
				// form.errors.password = [
				// 	// error.message
				// 	'Falsches Passwort!'
				// ];
			});

		if (wrongPasswordError)
			return fail(403, { password, incorrect: true, message: wrongPasswordErrorMessage });

		return { success: true };
	}
} satisfies Actions;
