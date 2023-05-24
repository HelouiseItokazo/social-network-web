import auth from '../src/config/firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const registerUser = () => {

    const email = document.getElementById("email-register").value;
    const password = document.getElementById("password-register").value;

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

export const signIn = () => {

    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    signInWithEmailAndPassword(
        auth,
        email,
        password
    )
        .then(() => {
            alert('Login do email ' + email + ' efetuado');
            window.location.assign("http://127.0.0.1:4173/#home");
        } )
        .catch(error => alert(error.message))

}//endSignIn

export const signOutLogin = () => {
    signOut(auth)
    .then(() => window.location.assign("http://127.0.0.1:4173/"))
    .catch(error => alert(error.message))
}




