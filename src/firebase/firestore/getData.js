import firebase_app from "../firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function getDocument(collection, id) {
	let docRef = doc(db, collection, id);

	let result = null;
	let error = null;

	try {
		result = await getDoc(docRef);
	} catch (e) {
		error = e;
	}

	return { result, error };
}

export async function getDocuments(collection, field, operator, value) {
	let collectionRef = collection(db, collection);
	let q = query(collectionRef, where(field, operator, value));

	let result = null;
	let error = null;

	try {
		result = await getDocs(q);
	} catch (e) {
		error = e;
	}

	return { result, error };
}
