// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIcAn0cCZNhuOUedLQIWpiHbsisNuBW9A',
  authDomain: 'fullstack-developer-444f5.firebaseapp.com',
  projectId: 'fullstack-developer-444f5',
  storageBucket: 'fullstack-developer-444f5.appspot.com',
  messagingSenderId: '67511954481',
  appId: '1:67511954481:web:e9a82f2aa345310d477910',
  measurementId: 'G-WL1FCLGT81',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app);

export { db };
