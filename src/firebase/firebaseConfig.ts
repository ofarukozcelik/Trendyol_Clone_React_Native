import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDsYAw0phJBXY2eU5XlJA3Qv_wTB8UyJks',
  authDomain: 'trendyol-230fe.firebaseapp.com',
  projectId: 'trendyol-230fe',
  storageBucket: 'trendyol-230fe.appspot.com',
  messagingSenderId: '970485599062',
  appId: '1:970485599062:ios:ec0a6740d97b79af12a4f7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
