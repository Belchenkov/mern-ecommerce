import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBGf8PxzGe3-UHBp0k1K78PBkz3LnPMl8Q",
    authDomain: "mern-ecommerce-dd260.firebaseapp.com",
    databaseURL: "https://mern-ecommerce-dd260.firebaseio.com",
    projectId: "mern-ecommerce-dd260",
    storageBucket: "mern-ecommerce-dd260.appspot.com",
    messagingSenderId: "1007298880612",
    appId: "1:1007298880612:web:38f0790c7b00d5e67f6b71"
};

firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();