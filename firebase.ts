import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAinj02f7pgdW-CeQguMVQPlZAXCwXgobA",
  authDomain: "chat-with-your-pdf-d2530.firebaseapp.com",
  projectId: "chat-with-your-pdf-d2530",
  storageBucket: "chat-with-your-pdf-d2530.appspot.com",
  messagingSenderId: "307429062258",
  appId: "1:307429062258:web:6abaed2afcf8b8b78674eb",
  measurementId: "G-8JSY2CX7JZ"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
