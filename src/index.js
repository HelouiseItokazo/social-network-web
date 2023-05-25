import { auth, db } from '../src/config/firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";

export const isTheUserLoggedIn = () => {

    auth.onAuthStateChanged((user) => {
        user = auth.currentUser;
        if (user) {
            const uid = user.uid;
            console.log(uid);
            return uid;
        }
    });
}

export const createPost = async (postUser) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            id: auth.currentUser.uid,
            text: postUser 
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const registerUser = (email, password) => {

    createUserWithEmailAndPassword(
        auth,
        email,
        password
    )
        .then(() => {
            alert('cadastrado ' + email);
            window.location.assign("http://127.0.0.1:4173/#home")
        })
        .catch(error => alert(error.message))

}//endRegisterUser

export const signIn = (email, password) => {

    signInWithEmailAndPassword(
        auth,
        email,
        password
    )
        .then(() => {
            alert('Login do email ' + email + ' efetuado');
            window.location.assign("http://127.0.0.1:4173/#home");
        })
        .catch(error => alert(error.message))

}//endSignIn

export const signOutLogin = () => {
    signOut(auth)
        .then(() => window.location.assign("http://127.0.0.1:4173/"))
        .catch(error => alert(error.message))

}//endSignOutLogin




