import firebase from "firebase";
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCoIAXzW8e8kfi8LReY56qgUREZ8yViUzw",
    authDomain: "vegan-recipe-site.firebaseapp.com",
    projectId: "vegan-recipe-site",
    storageBucket: "vegan-recipe-site.appspot.com",
    messagingSenderId: "10369813058",
    appId: "1:10369813058:web:445f7649271832a0b3bbdb"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()

  export { projectFirestore }