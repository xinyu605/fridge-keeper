import { collection, getFirestore } from 'firebase/firestore';

import firebaseApp from '@/firebaseConfig';

const firestore = getFirestore(firebaseApp);

const db = {
  users: collection(firestore, 'users'),
};

export default db;
