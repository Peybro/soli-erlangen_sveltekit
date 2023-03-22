import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import db from '../../lib/services/firebase';

export const load = async ({ depends }) => {
	depends('app:bannerSettings');

	const docRef = doc(db, 'banner', 'settings');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return {
			enabled: docSnap.data().enabled,
			title: docSnap.data().title,
			description: docSnap.data().description,
			bgColor: docSnap.data().bgColor
		};
	} else {
		console.log('No such document!');
	}

	return;
};

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		// console.log(formData);

		const auth = getAuth();
		const pw = formData.get('pw')?.toString() || '';

		await signInWithEmailAndPassword(auth, 'vorstand@soli-erlangen.de', pw)
			.then(async (userCredential) => {
				//? Signed in
				// const user = userCredential.user;
				// console.log(user);
				await setDoc(doc(db, 'banner', 'settings'), {
					enabled: formData.get('enabled') || false,
					title: formData.get('title') || '',
					description: formData.get('description') || '',
					bgColor: formData.get('bgColor') || ''
				});
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// console.log(errorCode, errorMessage);
				console.log('Falsches Passwort!');
			});
	}
};
