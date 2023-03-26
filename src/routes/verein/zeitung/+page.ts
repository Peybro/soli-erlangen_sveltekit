import { ref, listAll } from 'firebase/storage';
import { storage } from '$lib/services/firebase';

export const load = async () => {
	return { files: listAll(ref(storage, 'Vereinsblatt')) };
};
