
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyByh76p8H8wExnMv0E5bQ21AGpZlvA47GY",
  authDomain: "aconews-9078d.firebaseapp.com",
  projectId: "aconews-9078d",
  storageBucket: "aconews-9078d.appspot.com",
  messagingSenderId: "568420001790",
  appId: "1:568420001790:web:fef3a60d0012d6990282af",
  measurementId: "G-HHS87T15EG"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
