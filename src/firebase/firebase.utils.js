import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCVEt48QAQwNQ3LJDsv1bE6LyptLDGs0LA',
  authDomain: 'crwn-clothing-db-fdf58.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-fdf58.firebaseio.com',
  projectId: 'crwn-clothing-db-fdf58',
  storageBucket: 'crwn-clothing-db-fdf58.appspot.com',
  messagingSenderId: '168601342193',
  appId: '1:168601342193:web:b726f3f29d7de137791950',
  measurementId: 'G-YECJXGN6WY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
