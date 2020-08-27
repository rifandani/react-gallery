import firebase, { initializeApp } from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// config
const firebaseConfig = {
  apiKey: 'AIzaSyBUqKMAtdqUdyCSsye76Kfjyy8M_KCrUqM',
  authDomain: 'bug-tracker-rifandani.firebaseapp.com',
  databaseURL: 'https://bug-tracker-rifandani.firebaseio.com',
  projectId: 'bug-tracker-rifandani',
  storageBucket: 'bug-tracker-rifandani.appspot.com',
  messagingSenderId: '1057688673750',
  appId: '1:1057688673750:web:6e19773a299cae6803d877',
  measurementId: 'G-ZRL12JR53P',
};

// initialize App
initializeApp(firebaseConfig);
// storage
export const projectStorage = firebase.storage();
// firestore
export const projectFirestore = firebase.firestore();
// special firebase server timestamps
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
