//firebase config key setup

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWJClSrMy3ujpx5oONT3v4EQE3hqaUG5M",
    authDomain: "prac2-2b2b9.firebaseapp.com",
    projectId: "prac2-2b2b9",
    storageBucket: "prac2-2b2b9.appspot.com",
    messagingSenderId: "303943581463",
    appId: "1:303943581463:web:533ce482a9b929b6704152"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};