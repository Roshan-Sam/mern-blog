// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-efed4.firebaseapp.com",
    projectId: "mern-blog-efed4",
    storageBucket: "mern-blog-efed4.appspot.com",
    messagingSenderId: "246373003880",
    appId: "1:246373003880:web:be5c3c75ea4281bf3b01dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);