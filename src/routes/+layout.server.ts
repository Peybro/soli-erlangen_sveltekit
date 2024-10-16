import { auth } from '$lib/server/firebase';

export const load = async ({ cookies }) => {
	let user = null;
	const uid = cookies.get('user');
	if (!uid) return;
	await auth
		.verifyIdToken(uid)
		.then((decodedToken) => {
			user = decodedToken;
		})
		.catch((error) => {
			console.log(error);
			cookies.delete('user');
		});

	return { user };
};
