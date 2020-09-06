import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAE_iCNT6ro3kurLqu_audwynX2A28eIa4",
    authDomain: "whatsapp-clone-50efe.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-50efe.firebaseio.com",
    projectId: "whatsapp-clone-50efe",
    storageBucket: "whatsapp-clone-50efe.appspot.com",
    messagingSenderId: "372865310321",
    appId: "1:372865310321:web:1c616d2b0b75f6bc3945d0"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
 const auth = firebase.auth();

 const provider = new firebase.auth.GoogleAuthProvider();

 export {auth, provider};
 export default db;