import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9T2v_jU8zHQh2-JGPADc1eHNt-nhhLyM",
  authDomain: "plant-care-production.firebaseapp.com",
  projectId: "plant-care-production",
  storageBucket: "plant-care-production.appspot.com",
  messagingSenderId: "653449580086",
  appId: "1:653449580086:web:906c0ce26ae3d43893d297",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
