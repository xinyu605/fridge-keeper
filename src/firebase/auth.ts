import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import firebaseApp from '@/firebase/config';

const auth = getAuth(firebaseApp);

/** More AuthErrorCodes see Firebase details: https://firebase.google.com/docs/reference/js/auth?hl=zh-tw#autherrorcodes  */
export const AuthErrorCode = {
  INVALID_LOGIN_CREDENTIALS: 'auth/invalid-credential',
};

export const signUp = async (email: string, password: string) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};

export const signIn = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};
