// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8K9RdkmSmz5IknWdIlUfo0pfYLBDYIQE",
  authDomain: "ccrpt-project.firebaseapp.com",
  projectId: "ccrpt-project",
  storageBucket: "ccrpt-project.appspot.com",
  messagingSenderId: "1086711280120",
  appId: "1:1086711280120:web:9af9a5e5959eca886f660d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const initFirebase = () =>{
    return app;
}
export { auth };