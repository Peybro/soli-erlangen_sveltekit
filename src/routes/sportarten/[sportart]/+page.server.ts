import {
	ref,
	uploadBytes,
	uploadBytesResumable,
	deleteObject,
	getDownloadURL
} from 'firebase/storage';
import { storage } from '$lib/services/firebase';

import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
	images: z.any(),
	category: z.string()
});

export const load = async (event) => {
	const form = await superValidate(event, schema);

	return { form };
};

export const actions = {
	uploadImages: async (event) => {
		// const data = await request.formData();
		const form = await superValidate(event, schema);

		const category = form.data.category;
		const files = form.data.images;

		return { form };
	},
	deleteImage: async ({ request }) => {
		const data = await request.formData();

		const image = data.get('image');

		// Create a reference to the file to delete
		const imageRef = ref(storage, image?.toString());

		// Delete the file
		return deleteObject(imageRef)
			.then(() => {
				// File deleted successfully
				return { success: true, message: image + ' wurde gelöscht!' };
			})
			.catch((error) => {
				// Uh-oh, an error occurred!
				return {
					success: false,
					error: error
				};
			});
	}
};
