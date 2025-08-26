"use server";

import { auth } from '@/lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  signOut as firebaseSignOut
} from 'firebase/auth';

// Note: In a real app, you'd call these from client-side components,
// but we define them here to show the logic. Server actions can't directly
// handle the interactive OAuth popups. This file demonstrates the Firebase logic
// that would be triggered from the client.

export async function signUpWithEmail(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return JSON.parse(JSON.stringify(userCredential.user));
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return JSON.parse(JSON.stringify(result.user));
  } catch (error: any) {
     if (error.code === 'auth/popup-closed-by-user') {
        return null;
    }
    throw new Error(error.message);
  }
}

export async function signInWithGithub() {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
     return JSON.parse(JSON.stringify(result.user));
  } catch (error: any) {
    if (error.code === 'auth/popup-closed-by-user') {
        return null;
    }
    throw new Error(error.message);
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
}
