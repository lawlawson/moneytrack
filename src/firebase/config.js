import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtdTqBIaPTSqUkkeA5MOTG7ap-W9FtpZs',
  authDomain: 'mymoney-2df08.firebaseapp.com',
  projectId: 'mymoney-2df08',
  storageBucket: 'mymoney-2df08.appspot.com',
  messagingSenderId: '674645252466',
  appId: '1:674645252466:web:2928cda0e0c59101f3e5eb',
  measurementId: 'G-F2KWQQFWHE',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
