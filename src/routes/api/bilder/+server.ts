import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '$lib/services/firebase';
import { json } from '@sveltejs/kit';

export const POST = async () => {
	// const kunstradImages = await listAll(ref(storage, 'Bilder/Kunstrad'));
	// const radballImages = await listAll(ref(storage, 'Bilder/Radball'));
	// const reigenImages = await listAll(ref(storage, 'Bilder/Reigen'));
	// const gymnastikImages = await listAll(ref(storage, 'Bilder/Gymnastik'));
	// const kinerturnenImages = await listAll(ref(storage, 'Bilder/Kinderturnen'));
	// const kindertanzenImages = await listAll(ref(storage, 'Bilder/Kindertanzen'));

	const kunstradImages: string[] = [];
	const radballImages: string[] = [];
	const reigenImages: string[] = [];
	const gymnastikImages: string[] = [];
	const kinerturnenImages: string[] = [];
	const kindertanzenImages: string[] = [];

	await listAll(ref(storage, `Bilder/Kunstrad`)).then(async (img) => {
		for (const item of img.items) {
			await getDownloadURL(item).then((url) => {
				kunstradImages.push(url);
			});
		}
	});
	await listAll(ref(storage, `Bilder/Radball`)).then(async (img) => {
		for (const item of img.items) {
			await getDownloadURL(item).then((url) => {
				radballImages.push(url);
			});
		}
	});
	await listAll(ref(storage, `Bilder/Reigen`)).then(async (img) => {
		for (const item of img.items) {
			await getDownloadURL(item).then((url) => {
				reigenImages.push(url);
			});
		}
	});
	await listAll(ref(storage, `Bilder/Gymnastik`)).then(async (img) => {
		for (const item of img.items) {
			await getDownloadURL(item).then((url) => {
				gymnastikImages.push(url);
			});
		}
	});
	await listAll(ref(storage, `Bilder/Kinderturnen`)).then(async (img) => {
		for (const item of img.items) {
			await getDownloadURL(item).then((url) => {
				kinerturnenImages.push(url);
			});
		}
	});
	await listAll(ref(storage, `Bilder/Kindertanzen`)).then(async (img) => {
		for (const item of img.items) {
			await getDownloadURL(item).then((url) => {
				kindertanzenImages.push(url);
			});
		}
	});

	return json([
		kunstradImages,
		radballImages,
		reigenImages,
		gymnastikImages,
		kinerturnenImages,
		kindertanzenImages
	]);
};
