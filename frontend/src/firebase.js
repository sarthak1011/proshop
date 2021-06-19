// import * as firebase from "firebase"
// import firebase from 'firebase/app'
import firebase from 'firebase'
import 'firebase/storage'
export const app = firebase.initializeApp( {
    apiKey: "AIzaSyAFjiGhZScBIlIjtSFUQQp2mtdvzdvIM9w",
    authDomain: "janta-stores.firebaseapp.com",
    databaseURL: "https://janta-stores.firebaseio.com",
    projectId: "janta-stores",
    storageBucket: "janta-stores.appspot.com",
    messagingSenderId: "429527063016",
    appId: "1:429527063016:web:488ba11347560d5e7aac5d",
    measurementId: "G-M7ZFHMNE6K"
  });

  // Initialize Firebase
//   var fireDb = firebase.initializeApp(firebaseConfig);
// //   const storage = fireDb.storage()

//   // export default fireDb.database().ref();
//   export {fireDb as default}
  