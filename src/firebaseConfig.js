
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWfBH_DEbXVh5EAjsTOH9VcRCMNGX67O8",
  authDomain: "ecommerce-qualityshops.firebaseapp.com",
  projectId: "ecommerce-qualityshops",
  storageBucket: "ecommerce-qualityshops.appspot.com",
  messagingSenderId: "922423194714",
  appId: "1:922423194714:web:c254d54e2b499eb5f7d463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);