import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZaAZEP8_aQ_NZ6GJw9LB9pmvXeTo7XuI",
    authDomain: "dev-kbin-website.firebaseapp.com",
    projectId: "dev-kbin-website",
    storageBucket: "dev-kbin-website.appspot.com",
    messagingSenderId: "473726190998",
    appId: "1:473726190998:web:d91cdc22edc872eec8c9b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;