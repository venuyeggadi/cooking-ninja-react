import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBevkz7BYTIaP75FtPdte-TYxuIj6-WSqM",
  authDomain: "cooking-ninja-site-9822d.firebaseapp.com",
  projectId: "cooking-ninja-site-9822d",
  storageBucket: "cooking-ninja-site-9822d.appspot.com",
  messagingSenderId: "140297065876",
  appId: "1:140297065876:web:7af44a6a18aaefb348eb81"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };