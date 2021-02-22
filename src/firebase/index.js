import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';
import { BUCKET_NAME } from '../utils/constant';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET_NAME,
});

const storage = admin.storage();

export default storage;
