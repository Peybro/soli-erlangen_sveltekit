import { browserSessionPersistence, setPersistence } from 'firebase/auth';
import { auth } from '$lib/services/firebase';

export const load = async ({ cookies }) => {
	if (cookies.get('loggedIn') && cookies.get('loggedIn') === 'true') {
		await setPersistence(auth, browserSessionPersistence);
	}

	return {
		loggedIn: cookies.get('loggedIn') ? cookies.get('loggedIn') === 'true' : false
	};
};
