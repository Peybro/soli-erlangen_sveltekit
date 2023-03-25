import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDsLFA46MNckwF6aaEslQJj5j4xq2R8k2c',
	authDomain: 'soli-erlangen.firebaseapp.com',
	projectId: 'soli-erlangen',
	storageBucket: 'soli-erlangen.appspot.com',
	messagingSenderId: '203959319414',
	appId: '1:203959319414:web:0a8ef5699710f50a3f9857'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

// export default db;
