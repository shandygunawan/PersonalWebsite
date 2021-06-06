import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB4nKCm9E0h5w3bVyY0CK-eVRYLRR6tHTE",
  authDomain: "shandywebsite.firebaseapp.com",
  projectId: "shandywebsite",
  storageBucket: "shandywebsite.appspot.com",
  messagingSenderId: "168546891521",
  appId: "1:168546891521:web:51e3e5d6755ef7736c8d00",
  measurementId: "G-V6N4HK381C"
};

export default firebase.initializeApp(firebaseConfig);