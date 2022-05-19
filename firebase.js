// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEewOsmhasZsa3C-MJ4GkOf-VpFcKh0Gw",
    authDomain: "endless-orb-206506.firebaseapp.com",
    projectId: "endless-orb-206506",
    storageBucket: "endless-orb-206506.appspot.com",
    messagingSenderId: "599514547596",
    appId: "1:599514547596:web:698b0911dc7befb21042a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, app };