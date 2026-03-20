import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '$lib/services/firebase';
import { redirect } from '@sveltejs/kit';

export const load = async () => {};

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return { success: false, error: 'Bitte gib alle Felder an.' };
		}

		try {
			await setPersistence(auth, browserLocalPersistence);
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email.toString(),
				password.toString()
			);

			const token = await userCredential.user.getIdToken();
			cookies.set('user', token, { path: '/' });

			throw redirect(301, '/');
		} catch (error: any) {
			if (error.status === 301) throw error;

			return { success: false, error: 'Falsches Passwort!' };
		}
	}
};
