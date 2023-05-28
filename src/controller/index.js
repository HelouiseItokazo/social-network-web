import { 
    auth, 
    db,
    storage 
} from '../service/firebase.js';
import { 
    doc,
    setDoc
} from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { 
    post, 
    userSystem
} from '../model'
import { postConverter } from '../model/Post.js';
import { ref, uploadString} from 'firebase/storage';

const uploadPhoto = (base64Img) => {
    const storageRef = ref(storage, base64Img, 'data_url')
    .then((snapshot) => console.log('Uploaded a base64url string!'))
}
/*
O objeto FileReader permite que aplicativos da web leiam de forma assíncrona o conteúdo de arquivos 
(ou buffers de dados brutos) armazenados no computador do usuário, usando File ou Blob objetos para 
especificar o arquivo ou dados a serem lidos.
The readAsDataURL method is used to read the contents of the specified Blob or File. When the read 
operation is finished, the readyState becomes DONE, and the loadend is triggered. At that time, the 
result attribute contains the data as a data: URL representing the file's data as a base64 encoded string.
*/

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

export const isTheUserLoggedIn = () => {

    auth.onAuthStateChanged(function (user) {

        user = auth.currentUser;

        console.log(auth);
        console.log(user);
        
        if (user) {
            const newUser = new userSystem(user.uid, user.displayName, user.email, user.photoURL);
            console.log(newUser);
        }

    });

}

export const handleGoogleSingIn = async () => {

    try {

        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);

    } catch (error) {

        console.log(error.message);
        
    }

}


export const createPost = async (textPost) => {

    try {
        
        let newPost = new post(auth.currentUser.uid, auth.currentUser.displayName, textPost);
        const docRef = doc(db, "posts", "post").withConverter(postConverter);
        await setDoc(docRef, newPost)
        console.log(newPost);
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
            location.assign('#home');
            alert('cadastrado ' + email);
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
            location.assign('#home');
            console.log('Login do email ' + email + ' efetuado');
        })
        .catch(error => console.log(error.message))

}//endSignIn

export const signOutLogin = () => {

    signOut(auth)
        .then(() => location.assign(""))
        .catch(error => alert(error.message))

}//endSignOutLogin




