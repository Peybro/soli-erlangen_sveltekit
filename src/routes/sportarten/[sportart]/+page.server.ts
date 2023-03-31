import { ref, uploadBytes, deleteObject } from 'firebase/storage';
import { storage } from '$lib/services/firebase';

export const load = async () => {
	return {};
};

export const actions = {
	uploadImages: async ({ request }) => {
		const data = await request.formData();

		const category = data.get('category');
		const files = data.getAll('images');

		files.forEach(async (file) => {
			if (!(file instanceof File)) {
				return {
					success: false,
					error: 'Bitte wähle gültige Bilder aus!'
				};
			}

			const uploadRef = ref(storage, `Bilder/${category}/${file.name}`);

			return await uploadBytes(uploadRef, new Uint8Array(await file.arrayBuffer()), {
				contentType: `image/${file.toString().split('.').at(-1)}`
			})
				.then((snapshot) => {
					console.log(file.name + ' wurde hochgeladen!');
				})
				.catch((error) => {
					// console.log(error);
					return {
						success: false,
						error: error
					};
				});
		});

		return {
			success: true,
			message: 'Alle Bilder erfolgreich hochgeladen. Seite neu laden um sie zu sehen.'
		};
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
