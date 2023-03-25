import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '$lib/services/firebase';

export const load = async () => {
	const loadPDFs = async () => {
		const files: string[] = [];

		await listAll(ref(storage, 'Vereinsblatt'))
			.then((res) => {
				res.items.forEach((itemRef) => {
					getDownloadURL(itemRef).then((url) => {
						// console.log(url);
						files.unshift(url);
					});
				});

				// console.log(files);
			})
			.catch((error) => {
				console.log(error);
			});

		return files;
	};

	return { files: loadPDFs() };
};
