import firebase_app from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
	collection,
	getFirestore,
	query,
	where,
	getDocs,
	setDoc,
	doc,
} from "firebase/firestore";
import addData from "./firestore/addData";

const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

export default async function signUp(
	firstName,
	lastName,
	email,
	password,
	propertyCode
) {
	let result = null,
		error = null;
	try {
		const propertyQuery = query(
			collection(db, "properties"),
			where("code", "==", propertyCode)
		);
		const querySnapshot = await getDocs(propertyQuery);
		let propertyDoc;

		querySnapshot.forEach((doc) => {
			propertyDoc = doc;
		});

		if (!propertyDoc) {
			throw new Error("Invalid property code");
		}

		// Create the user
		const { user } = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		// If the user is successfully created, update the property's ownerID
		if (user) {
			const propertyData = { ownerID: user.uid };
			await setDoc(doc(db, "properties", propertyDoc.id), propertyData, {
				merge: true,
			});

			// Create a user document
			const userData = {
				firstName: firstName,
				lastName: lastName,
				email: email,
				code: propertyCode,
				uid: user.uid,
			};
			const { result: addDataResult, error: addDataError } = await addData(
				"users",
				user.uid,
				userData
			);
			if (addDataError) {
				return console.log(addDataError);
			}

			result = user;
		}
	} catch (e) {
		error = e;
	}

	return { result, error };
}
