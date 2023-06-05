import { signOutLogin, createPost } from '../../controller';

export default () => {

  const container = document.createElement('section');

  const template = `
        <h1>Home</h1>
        <input id="post" type="text">
        <button id="send">Publicar</button>
        <button id="sign-out">Voltar</button>
    `;

  container.innerHTML = template;

  const buttonSend = container.querySelector("#send");

  buttonSend.addEventListener('click', async () => {
    const post = container.querySelector("#post");
    createPost(post.value)
    .then(() => post.value = "")
    .catch((error) => console.log(error.message))   
  })

  const buttonSignOut = container.querySelector("#sign-out");

  buttonSignOut.addEventListener('click', async (event) => {

    event.preventDefault();
  
    signOutLogin()
    .then(() => window.location.hash = '')
    .catch((error) => console.log(error));
   
  })

  return container;

}//endArrowFunction