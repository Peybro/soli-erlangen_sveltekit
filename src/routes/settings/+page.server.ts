export const load = async ({ cookies }) => {
	return {
		openMaps: cookies.get('mapSelection') || '1'
	};
};

export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const mapSelection = formData.get('mapSelection');

		cookies.set('mapSelection', mapSelection?.toString() || '1');
	}
};
