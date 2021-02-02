import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDLWhd4UGPPGgjlzlMRb1W2F3XIJMRPbdE",
    authDomain: "makebelieve-da4de.firebaseapp.com",
    projectId: "makebelieve-da4de",
    storageBucket: "makebelieve-da4de.appspot.com",
    messagingSenderId: "648781792557",
    appId: "1:648781792557:web:3a64ab02bd5339b0b5bfa4",
    measurementId: "G-1GQY32KHEG"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 const analytics  =  firebase.analytics();
 const db  = firebaseApp.firestore();
 export const auth = firebaseApp.auth();

 export default db;