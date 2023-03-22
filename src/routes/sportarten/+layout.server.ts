export const load = async ({ cookies }) => {
	return {
		mapSelection: cookies.get('mapSelection') === '1'
	};
};
