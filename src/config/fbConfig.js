import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
   apiKey: "AIzaSyCEkPdN8R7AlOg9RG9uIwrxqcOrBXZS8Js",
   authDomain: "mohak-gadge.firebaseapp.com",
   databaseURL: "https://mohak-gadge-default-rtdb.firebaseio.com",
   projectId: "mohak-gadge", 
   storageBucket: "mohak-gadge.appspot.com",
   messagingSenderId: "809114850502",
   appId: "1:809114850502:web:b8f1d925ef7370f3aef3c7",
   measurementId: "G-Z0DF53FKTL"
};

firebase.initializeApp(config);
var db = firebase.firestore();

export { db };