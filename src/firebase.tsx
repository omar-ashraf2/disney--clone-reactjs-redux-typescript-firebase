// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAChIeOQJvpS9KTzbl9jTWf35JyPp2mw7k",
  authDomain: "disneyplus-clone-e5.firebaseapp.com",
  projectId: "disneyplus-clone-e5",
  storageBucket: "disneyplus-clone-e5.appspot.com",
  messagingSenderId: "791724087996",
  appId: "1:791724087996:web:9dac1d1facced7d9950eb9",
  measurementId: "G-VFEJ7CZ50N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const analytics = getAnalytics(app);

export { auth, provider, storage, analytics };
export default db;
