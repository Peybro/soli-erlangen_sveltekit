import type { Actions } from './$types';
import {
	gymnastikImages,
	kindertanzenImages,
	kinderturnenImages,
	kunstradImages,
	radballImages,
	reigenImages
} from '../lib/services/imageService';

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
	const imageArray = shuffle([
		...gymnastikImages,
		...kindertanzenImages,
		...kinderturnenImages,
		...kunstradImages,
		...radballImages,
		...reigenImages
	]);

	return {
		imageArray,
		mapSelection: cookies.get('mapSelection')
	};
};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('loggedIn');
	}
} satisfies Actions;
