export const load = async ({}) => {
	const newsPapers = Object.keys(import.meta.glob('$lib/vereinsblatt/*.pdf')).reverse();

	return {
		newsPapers
	};
};
