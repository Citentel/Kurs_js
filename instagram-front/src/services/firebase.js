import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  onValue,
  ref,
  set,
  get as FBget,
} from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: 'AIzaSyDMKanv3fYZdmb4p0m2v7BqM0HZrS49SpQ',
//   databaseURL:
//     'https://alx-chat-d07f1-default-rtdb.europe-west1.firebasedatabase.app',
//   authDomain: 'alx-chat-d07f1.firebaseapp.com',
//   projectId: 'alx-chat-d07f1',
//   storageBucket: 'alx-chat-d07f1.appspot.com',
//   messagingSenderId: '772053940526',
//   appId: '1:772053940526:web:70f04383f4575aeb7e62bf',
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOAMIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);

export const observe = (url, callback) =>
  onValue(ref(database, `${url}/`), (snapshot) => {
    const data = snapshot.val();
    callback(data ? Object.values(data) : []);
  });

export const save = (url, data) =>
  set(ref(database, `${url}/${data.id}`), data);
export const update = (url, data) => set(ref(database, url), data);
export const get = (url) =>
  FBget(ref(database, url)).then((data) => data.val());

export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const singOutUser = () => signOut(auth);

export const updateUser = (user, name, photo) =>
  updateProfile(user, {
    displayName: name,
    photoURL: photo,
  });
