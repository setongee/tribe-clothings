import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyC4k6Tqk4nPUdyPJEmSoM-FsP8CIHzjhIE",
    authDomain: "tribe-clothing.firebaseapp.com",
    databaseURL: "https://tribe-clothing.firebaseio.com",
    projectId: "tribe-clothing",
    storageBucket: "tribe-clothing.appspot.com",
    messagingSenderId: "784071151135",
    appId: "1:784071151135:web:b2ed2a7cf8b3b8d25dcf2a",
    measurementId: "G-BZLTSVEH1F"
};

export const createUserProfile = async (userAuth, addData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email} = userAuth;
        const dateCreated = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                dateCreated,
                ...addData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('profile');

provider.addScope('email');

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;