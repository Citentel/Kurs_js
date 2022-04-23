import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
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
  apiKey: 'AIzaSyCU0XblPqpCnjryjfzQyl2GS2MHUIFuAM0',
  authDomain: 'alxchat1.firebaseapp.com',
  projectId: 'alxchat1',
  databaseURL:
    'https://alxchat1-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: 'alxchat1.appspot.com',
  messagingSenderId: '250637046697',
  appId: '1:250637046697:web:4856742326a9baf903eab8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
