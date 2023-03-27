import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	// test: async ({ request }) => {
	// 	const data = await request.formData();
	// 	const fileValue = data.get('file');
	// 	console.log(fileValue);
	// }
} satisfies Actions;
