import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	return {
		maps:
			cookies.get('mapSelection') &&
			(cookies.get('mapSelection') !== null ||
				cookies.get('mapSelection') !== undefined ||
				cookies.get('mapSelection') !== '')
				? cookies.get('mapSelection')
				: '1'
	};
}) satisfies PageServerLoad;

export const actions = {
	saveCookie: async ({ cookies, request }) => {
		const data = await request.formData();
		const mapSelection = data.get('mapSelection');

		cookies.set('mapSelection', mapSelection?.toString() || '1');

		return { success: true };
	}
} satisfies Actions;
