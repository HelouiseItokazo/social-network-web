import { authUser, registerUser, isTheUserLoggedIn, alreadyRegisteredUser } from '../../controller';

export default () => {

  const container = document.createElement('section');

  const template = `
    <form>
      <h1>Cadastro</h1>
      <input id="photoUser" type=file>
      <input id="name-register" type="text" placeholder="Informe seu nome">
      <input id="email-register" type="text" placeholder="Informe seu e-mail">
      <input id="password-register" type="text" placeholder="Informe sua senha">
      <input id="password-confirmation-register" type="text" placeholder="Confirme sua senha">
      <button id="register">Cadastrar</button>
    </form>
    `;

  container.innerHTML = template;

  const buttonRegister = container.querySelector("#register");

  buttonRegister.addEventListener('click', (event) => {

    event.preventDefault();

    const name = document.querySelector('#name-register').value;
    const emailRegister = document.querySelector("#email-register").value;
    const passwordRegister = document.querySelector("#password-register").value;

    authUser(emailRegister, passwordRegister)
      .then((user) => isTheUserLoggedIn)
      .then((user) => alreadyRegisteredUser(user.email))
      .then(() => alert('usuario já cadastrado'))
      .catch(async (error) => {
        console.log('Vou cadastrar o usuário');
        const user = await isTheUserLoggedIn;
        await registerUser(user.uid, name, emailRegister, null)
        console.log(error.message);
      })

  });//endAddEventListener

  return container;

}//endArrowFunction