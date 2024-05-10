import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut as googleSignOut,
  User,
} from "firebase/auth";

import usersService from "./users";

export interface GoogleUser extends User {}

const firebaseConfig = {
  apiKey: "AIzaSyCRyWMQLIWiXi4ie0LeUufewPU-6lqxlbU",
  authDomain: "campus-hub-e8311.firebaseapp.com",
  projectId: "campus-hub-e8311",
  storageBucket: "campus-hub-e8311.appspot.com",
  messagingSenderId: "879112545117",
  appId: "1:879112545117:web:3ef1c576ee23fab588feb4",
  measurementId: "G-1XHR8RYP6H",
};

const app = initializeApp(firebaseConfig);
export const googleAuth = getAuth(app);

export async function saveUserWhenIsNot(user: GoogleUser | null | undefined) {
  if (!user || !user.email || !user.displayName) return;

  const { displayName, email, photoURL } = user;
  await usersService.create({
    avatar: photoURL || "",
    email,
    name: displayName,
  });
}

export const signInWithGoogle = () =>
  signInWithRedirect(googleAuth, new GoogleAuthProvider());

export const signOut = async () => await googleSignOut(googleAuth);

export default { signOut, signInWithGoogle };
