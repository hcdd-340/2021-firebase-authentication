import * as firebase from 'firebase';
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZJ0ERZQFo3Y-rF8RzCwWnbkem7aUTJFM",
  authDomain: "hcdd-340-spring-2021.firebaseapp.com",
  projectId: "hcdd-340-spring-2021",
  storageBucket: "hcdd-340-spring-2021.appspot.com",
  messagingSenderId: "80114652777",
  appId: "1:80114652777:web:e5821da8e493729a09b4f8"
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore