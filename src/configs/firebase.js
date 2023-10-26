import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBl4Yhpl4TNvmn_ZrGSk33y7hjyvWLqykI",
  authDomain: "aiventss.firebaseapp.com",
  projectId: "aiventss",
  storageBucket: "gs://aiventss.appspot.com",
  messagingSenderId: "190265324182",
  appId: "1:190265324182:web:565519d617c941289d48b7",
  measurementId: "G-J3YNB027J2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
