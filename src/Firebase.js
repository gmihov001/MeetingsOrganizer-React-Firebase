import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';

const config = {
  apiKey: "AIzaSyAWnHg9wGHmCGnUO1AS3voMQXY99dWdSTc",
    authDomain: "react-spas-20a55.firebaseapp.com",
    databaseURL: "https://react-spas-20a55.firebaseio.com",
    projectId: "react-spas-20a55",
    storageBucket: "react-spas-20a55.appspot.com",
    messagingSenderId: "409060789091",
    appId: "1:409060789091:web:4baea596373e974ed0e156"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
