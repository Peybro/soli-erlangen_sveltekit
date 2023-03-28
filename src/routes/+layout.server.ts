import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	return {
		loggedIn: cookies.get('loggedIn') ? cookies.get('loggedIn') === 'true' : false
	};
}) satisfies PageServerLoad;
