import {
    alreadyRegisteredUser,
    handleGoogleSingIn,
    isTheUserLoggedIn,
    registerUser,
    signIn
} from '../../controller';

export default () => {

    const container = document.createElement('section');

    const template = `
    <form>
        <h1>Login</h1>
        <input id="email-login" type="text" placeholder="Informe seu e-mail">
        <input id="password-login" type="text" placeholder="Informe sua senha">
        <button id="sign-in">Entrar</button>
    </form>
    <img id="img-google" src="/images/google.svg" alt="logo do google">
    `;

    container.innerHTML = template;

    const buttonSignIn = container.querySelector('#sign-in');

    buttonSignIn.addEventListener('click', (event) => {

        event.preventDefault();

        const email = container.querySelector('#email-login').value;
        const password = container.querySelector('#password-login').value;

        signIn(email, password)
            .then(() => window.location.hash = '#home')
            .catch((error) => console.log(error.message))

    })//endAddEventListener

    const imgGoogle = container.querySelector('#img-google');

    imgGoogle.addEventListener('click', (event) => {

        event.preventDefault();

        handleGoogleSingIn()
            .then((user) => isTheUserLoggedIn)
            .then((user) => alreadyRegisteredUser(user.email))
            .then(() => window.location.hash = '#home')
            .then(() => console.log('JA TA CADASTRADO'))
            .catch(async (error) => {
                console.log('VOU CADASTRAR')
                const user = await isTheUserLoggedIn;
                await registerUser(user.uid, user.displayName, user.email, user.photoURL);
                window.location.hash = '#home'
                console.log(error.message);
            })

    })//endAddEventListener

    return container;

}//endArrowFunction