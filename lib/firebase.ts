// lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
};

const app = initializeApp(firebaseConfig);

// 🔥 BU VACİBDİR
export const db = getFirestore(app);