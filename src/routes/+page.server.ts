import { setPersistence, signOut, inMemoryPersistence } from 'firebase/auth';
import { auth } from '$lib/services/firebase';
/**
 * Shuffles array
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: any[]) {
	const shuffled = a
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	return shuffled;
}

export const load = async ({ cookies }) => {
	return {
		mapSelection: cookies.get('mapSelection')
	};
};

export const actions = {
	logout: async ({ cookies }) => {
		await signOut(auth)
			.then(async () => {
				await setPersistence(auth, inMemoryPersistence);
				cookies.delete('loggedIn');
			})
			.catch((error) => {
				console.log(error);
			});
	}
};
