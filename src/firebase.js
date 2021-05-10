import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaM4zIAXbbikGOK0UcmCZqkOf-_ioMqgw",
    authDomain: "clone-cf604.firebaseapp.com",
    projectId: "clone-cf604",
    storageBucket: "clone-cf604.appspot.com",
    messagingSenderId: "976519084366",
    appId: "1:976519084366:web:c12debfc898fc00386c61f",
    measurementId: "G-N3Y5G6CDNM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
   
  export {db , auth};