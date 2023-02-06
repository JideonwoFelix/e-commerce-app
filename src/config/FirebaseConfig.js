import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyBT4bKBXnPzq5BzJQAtAbAfQYWcXKk5ziw",
    authDomain: "e-commerce-project-797ff.firebaseapp.com",
    projectId: "e-commerce-project-797ff",
    storageBucket: "e-commerce-project-797ff.appspot.com",
    messagingSenderId: "786618161724",
    appId: "1:786618161724:web:da4d899093990d7c68c139",
    measurementId: "G-570JJ5E5M9"
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);