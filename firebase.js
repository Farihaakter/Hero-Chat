import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firebase-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbnHVgHtwlmzaGtfaLXGZ0gyvPMTMJhsI",
  authDomain: "react-native-2d514.firebaseapp.com",
  projectId: "react-native-2d514",
  storageBucket: "react-native-2d514.appspot.com",
  messagingSenderId: "957568197087",
  appId: "1:957568197087:web:20fda0057700687934646a",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firebase - store();
const auth = firebase.auth();

export { db, auth };
