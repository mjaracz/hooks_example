import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCwZ3KzpxTOrTdKlRLCewIsMPNJTQuEQPA",
  authDomain: "todoist-hooks.firebaseapp.com",
  databaseURL: "https://todoist-hooks.firebaseio.com",
  projectId: "todoist-hooks",
  storageBucket: "todoist-hooks.appspot.com",
  messagingSenderId: "1007762761161",
  appId: "1:1007762761161:web:8d30395a5097f0be"
});

export {firebaseConfig as firebase};
