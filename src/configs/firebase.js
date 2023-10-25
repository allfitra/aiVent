import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getFirestore } from "firebase/firestore";
// import "firebase/auth";
// import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVxx-hIDoND0941r-7mKpBql-49wInDzo",
  authDomain: "aivents-a0c5d.firebaseapp.com",
  databaseURL: "https://aivents-a0c5d-default-rtdb.firebaseio.com",
  projectId: "aivents-a0c5d",
  storageBucket: "aivents-a0c5d.appspot.com",
  messagingSenderId: "483050174504",
  appId: "1:483050174504:web:5e29852fa5079bbb10dd1d",
  measurementId: "G-J7TM0ZMDRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
