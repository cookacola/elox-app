import { getAuth, signOut } from "firebase/auth";
import firebase_app from "./firebase";

const auth = getAuth(firebase_app);

const signOutUser = async () => {
	try {
		await signOut(auth);
		console.log("Signed out successfully");
		return { success: true };
	} catch (error) {
		console.error("Failed to sign out", error);
		return { success: false, error: error.message };
	}
};

export default signOutUser;
