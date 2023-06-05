import {
    auth,
    db,
    storage
} from '../service/firebase.js';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    where
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
import { userConverter } from '../model/User.js';
import { ref, uploadString } from 'firebase/storage';

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

export const isTheUserLoggedIn = new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log(user.uid);
            resolve(user);
        } else {
            reject('Nenhum usuário logado');
        }
    })
})

export const alreadyRegisteredUser = async (email) => {
    try {
        const ref = doc(db, 'users', `${email}`).withConverter(userConverter);
        const docSnap = await getDoc(ref);

        return new Promise((resolve, reject) => {
            if (docSnap.exists()) {
                const user = docSnap.data();
                console.log(user.toString());
                resolve('Chave primária encontrada')
            } else {
                console.log("No such document!");
                reject('Não existe documento que corresponda a este usuário')
            }
        })
    } catch (error) {
        console.log(error.message);
    }
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
        const uid = auth.currentUser.uid;
        const name = auth.currentUser.displayName;

        const newPost = new post(uid, name, textPost, 0, serverTimestamp());

        const docRef = doc(collection(db, 'posts')).withConverter(postConverter);
        await setDoc(docRef, newPost);

        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

export const registerUser = async (uid, name, email, photo) => {
    try {
        const newUser = new userSystem(uid, name, email, photo, serverTimestamp());
        const docRef = doc(db, 'users', `${email}`).withConverter(userConverter);
        await setDoc(docRef, newUser);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}//endRegisterUser

export const authUser = async (email, password) => {
    try {
        createUserWithEmailAndPassword(auth, email, password);
        console.log('usuario autenticado com sucesso');
    } catch (error) {
        console.log(error.message);
    }
}

export const signIn = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error.message);
    }
}//endSignIn

export const signOutLogin = async () => {
    try {
        signOut(auth);
    } catch (error) {
        console.log(error.message);
    }
}//endSignOutLogin




