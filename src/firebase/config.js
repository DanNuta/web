import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCiga5cH9qwR8w6Gxsn9sbZ39g_UHXGpkk",
    authDomain: "website-f96f4.firebaseapp.com",
    projectId: "website-f96f4",
    storageBucket: "website-f96f4.appspot.com",
    messagingSenderId: "237041125934",
    appId: "1:237041125934:web:c9d2f356b54638ce1dedbf"
  };



  firebase.initializeApp(firebaseConfig)

  const webFirestore = firebase.firestore()
  const webAuth = firebase.auth();
  const webStorege = firebase.storege();

  export default {webFirestore, webAuth}