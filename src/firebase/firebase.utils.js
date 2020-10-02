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

// Google Sign In
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Storing user to database
export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (userAuth === null) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
};

// Adding data to firestore
export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// Getting data from firestore
export const convertCollectionToShopData = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  // converting array of objects to an object with key and value
  return transformedCollection.reduce((acc, obj) => {
    acc[obj.title.toLowerCase()] = obj;
    return acc;
  }, {});
};

export default firebase;
