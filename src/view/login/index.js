import { 
    handleGoogleSingIn, 
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

    const buttonSignIn = container.querySelector("#sign-in");

    if (buttonSignIn) {

        buttonSignIn.addEventListener('click', event => {

            event.preventDefault();

            try {

                const email = container.querySelector("#email-login").value;
                const password = container.querySelector("#password-login").value;

                signIn(email, password);

            } catch(error){

                console.log(error.message);

            }//endTryCatch

        })//endAddEventListener

    }//endIf

    const imgGoogle = container.querySelector("#img-google");

    if(imgGoogle){

        imgGoogle.addEventListener('click', async event => {
            event.preventDefault();
            try {

                await handleGoogleSingIn();
                event.preventDefault();
                console.log("esperei 2");
            
         
            }catch(error){

                console.log(error.message);

            }
                
            
       

            

        })//endAddEventListener

    }//endIf

    return container;

}//endArrowFunction