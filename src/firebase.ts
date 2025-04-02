import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0JT1YaC6vxMWu2-EDqIUR7V7Td2R6bZU",
  authDomain: "bikalol-73db8.firebaseapp.com",
  databaseURL: "https://bikalol-73db8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bikalol-73db8",
  storageBucket: "bikalol-73db8.firebasestorage.app",
  messagingSenderId: "496960355401",
  appId: "1:496960355401:web:31644561a66c8832205398"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app);
export async function emailSignIn(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function emailSignUp(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function userSignOut() {
  return await signOut(auth);
}