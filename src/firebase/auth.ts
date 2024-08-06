import {
  type UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc } from 'firebase/firestore';

import { type MutationResult } from '@/firebase/firebase.types';
import { onError } from '@/firebase/utils';
import db from '@/firebase/db';
import firebaseApp from '@/firebaseConfig';

const auth = getAuth(firebaseApp);
const { users } = db;

export const signUp = async (
  email: string,
  password: string
): Promise<MutationResult<true>> => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(users, {
      email,
    });
    return { result: true };
  } catch (err) {
    return onError(err);
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<MutationResult<UserCredential>> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { result };
  } catch (err) {
    return onError(err);
  }
};
