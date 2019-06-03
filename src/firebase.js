import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBA8daPWPyplDvJCds4wW1sHeZUTqgnylI",
    authDomain: "auth-demo-819ef.firebaseapp.com",
    databaseURL: "https://auth-demo-819ef.firebaseio.com",
    projectId: "auth-demo-819ef",
    storageBucket: "auth-demo-819ef.appspot.com",
    messagingSenderId: "535564515100",
    appId: "1:535564515100:web:56b27def6fae5104"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;