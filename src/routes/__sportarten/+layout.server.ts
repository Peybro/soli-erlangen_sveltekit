export const load = async ({ cookies }) => {
	return {
		maps:
			cookies.get('mapSelection') !== undefined || cookies.get('mapSelection') !== ''
				? cookies.get('mapSelection')
				: '1'
	};
};
