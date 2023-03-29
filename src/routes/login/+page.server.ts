import type { Actions, PageServerLoad } from './$types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '$lib/services/firebase';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {
	return {
		loggedIn: cookies.get('loggedIn') === 'true' ? true : false
	};
}) satisfies PageServerLoad;

export const actions = {
	login: async ({ request, cookies, url }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		if (
			email &&
			email !== undefined &&
			email !== '' &&
			password &&
			password !== undefined &&
			password !== ''
		) {
			return await signInWithEmailAndPassword(auth, email.toString(), password.toString())
				.then(async (userCredential) => {
					//? Signed in
					// const user = userCredential.user;
					// console.log(user);
					cookies.set('loggedIn', 'true');
					throw redirect(301, '/');
				})
				.catch((error) => {
					// console.log(error);
					if (error.status === 301) {
						throw redirect(301, '/');
					}

					return {
						success: false,
						error: 'Falsches Passwort!'
					};
				});
		} else {
			return {
				success: false,
				error: 'Bitte gib alle Felder an.'
			};
		}
	}
} satisfies Actions;