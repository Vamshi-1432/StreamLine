// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZunnEyWolpcJSL1CvuCGmNX1iiBDQ8Tg",
  authDomain: "netflix-clone-9c34e.firebaseapp.com",
  projectId: "netflix-clone-9c34e",
  storageBucket: "netflix-clone-9c34e.firebasestorage.app",
  messagingSenderId: "148883944705",
  appId: "1:148883944705:web:750597da9c1a7ae5ca1700",
  measurementId: "G-H9YNR7K6ZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
