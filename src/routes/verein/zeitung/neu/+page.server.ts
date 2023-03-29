import type { Actions, PageServerLoad } from './$types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes } from 'firebase/storage';
import { auth, storage } from '$lib/services/firebase';
import { fail } from '@sveltejs/kit';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	uploadPDF: async ({ request }) => {
		const data = await request.formData();

		const file = data.get('path');
		const seasonFrom = data.get('seasonFrom');
		const seasonTo = data.get('seasonTo');
		const yearFrom = data.get('yearFrom');
		const yearTo = data.get('yearTo');
		// const password = data.get('password');

		if (
			!file ||
			file === undefined ||
			file === '' ||
			!seasonFrom ||
			seasonFrom === undefined ||
			seasonFrom === '' ||
			!seasonTo ||
			seasonTo === undefined ||
			seasonTo === '' ||
			!yearFrom ||
			yearFrom === undefined ||
			yearFrom === '' ||
			!yearTo ||
			yearTo === undefined ||
			yearTo === ''
			// || !password ||
			// password === undefined ||
			// password === ''
		) {
			return { success: false, error: 'Bitte gib alle Felder an.' };
		}

		if (
			parseInt(seasonFrom.toString()) === parseInt(seasonTo.toString()) &&
			parseInt(yearFrom.toString()) === parseInt(yearTo.toString())
		) {
			return {
				success: false,
				error: 'Die Saisons dürfen nicht gleich sein wenn die Jahre gleich sind.'
			};
		}

		if (Math.abs(parseInt(yearTo.toString()) - parseInt(yearFrom.toString())) > 1) {
			return {
				success: false,
				error:
					'Das "Von"-Jahr muss kleiner oder gleich dem "Bis"-Jahr sein und beide können nicht weiter als 1 Jahr auseinander liegen.'
			};
		}

		// if (
		// 	(parseInt(seasonFrom.toString()) === parseInt(seasonTo.toString()) &&
		// 		parseInt(yearFrom.toString()) !== parseInt(yearTo.toString())) ||
		// 	(parseInt(seasonFrom.toString()) !== parseInt(seasonTo.toString()) &&
		// 		parseInt(yearFrom.toString()) === parseInt(yearTo.toString()))
		// ) {
		// 	return {
		// 		success: false,
		// 		error:
		// 			'Die Saisons dürfen nicht gleich sein wenn die Jahre gleich sind und die Jahre dürfen nicht gleich sein wenn die Saisons gleich sind.'
		// 	};
		// }

		if (file instanceof File) {
			if (!file.name.endsWith('.pdf')) {
				return { success: false, error: 'Bitte wähle eine gültige PDF-Datei aus!' };
			}

			const uploadRef = ref(
				storage,
				`Vereinsblatt/soli_info_${yearFrom.toString()}_${seasonFrom.toString()}.pdf`
			);

			// return await signInWithEmailAndPassword(
			// 	auth,
			// 	'vorstand@soli-erlangen.de',
			// 	// password.toString() ?? ''
			// 	'soli-erlangen'
			// )
			// 	.then(async (userCredential) => {
			// 		//? Signed in
			// 		// const user = userCredential.user;
			// 		// console.log(user);

					return await uploadBytes(uploadRef, new Uint8Array(await file.arrayBuffer()), {
						contentType: 'application/pdf'
					})
						.then((snapshot) => {
							return { success: true };
						})
						.catch((error) => {
							return {
								success: false,
								error: 'Irgendetwas ist schief gelaufen... Bitte probier es nochmal!'
							};
						});
				// })
				// .catch((error) => {
				// 	// console.log(error);
				// 	// return fail(400, { password, incorrect: true });
				// 	return {
				// 		success: false,
				// 		// error: 'Falsches Passwort!'
				// 		error: error.message
				// 	};
				// });
		} else {
			return {
				success: false,
				error: 'Bitte wähle eine gültige PDF-Datei aus!!'
			};
		}
	}
} satisfies Actions;
