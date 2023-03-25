import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '$lib/services/firebase';

export const load = async ({}) => {
	// const listRef = ref(storage, 'Vereinsblatt/soli_info_2005_1.pdf');
	// getDownloadURL(listRef).then((url) => {
	// 	console.log(url);
	// }).catch((error) => {
	// 	console.log(error);
	// });

	const listRef = ref(storage, 'Vereinsblatt');

	async function getFiles(): Promise<string[]> {
		const files: string[] = [];

		await listAll(listRef)
			.then((res) => {
				// res.prefixes.forEach((folderRef) => {
				// 	// All the prefixes under listRef.
				// 	// You may call listAll() recursively on them.
				// 	console.log(folderRef);
				// });
				res.items.forEach(async (itemRef) => {
					// All the items under listRef.
					console.log(itemRef.name);
					await getDownloadURL(itemRef).then((url) => {
						// console.log(url);
						// files.push(url);
						files.unshift(url);
					});
				});

				// console.log(files);
			})
			.catch((error) => {
				// Uh-oh, an error occurred!
				console.log(error);
			});

		return await new Promise((resolve, reject) => {
			resolve(files);
			// reject("Error")
		});
	}

	return { files: getFiles() };
};
