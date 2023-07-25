// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCquhSF-7uK_CPVvhRacYOUkP74i7WTihI",
	authDomain: "elox-app.firebaseapp.com",
	projectId: "elox-app",
	storageBucket: "elox-app.appspot.com",
	messagingSenderId: "527136558727",
	appId: "1:527136558727:web:ff430b8a55ca33d3e37222",
	measurementId: "G-HT0YCTPEYM",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();