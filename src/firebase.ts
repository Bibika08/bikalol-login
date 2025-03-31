import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB_oPpc8NribiPWhkNnp0OmSbUdUZDSsqM",
  authDomain: "database-auth1.firebaseapp.com",
  projectId: "database-auth1",
  storageBucket: "database-auth1.firebasestorage.app",
  messagingSenderId: "967994032282",
  appId: "1:967994032282:web:ca03355a425c6bf8841f23"
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