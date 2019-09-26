import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD24mw_NuZFf-5juq2hTkdMYGSv_ZzJStY",
  authDomain: "rightwayap1.firebaseapp.com",
  databaseURL: "https://rightwayap1.firebaseio.com",
  projectId: "rightwayap1",
  storageBucket: "",
  messagingSenderId: "236376424056",
  appId: "1:236376424056:web:0f63dfd4d5a3b557"
};

// Initialize Firebase
var FirebaseApp = firebase.initializeApp(firebaseConfig);

export default FirebaseApp;
