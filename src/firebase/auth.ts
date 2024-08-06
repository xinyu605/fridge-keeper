import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import firebaseApp from '@/firebaseConfig';

const auth = getAuth(firebaseApp);

export const signUp = async (email: string, password: string) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};

export const signIn = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};
