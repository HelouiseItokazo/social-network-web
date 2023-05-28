import { signOutLogin,  createPost } from '../../controller';

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

      if (buttonSend) {
        buttonSend.addEventListener('click', event => {
          event.preventDefault();
          const post = container.querySelector("#post").value;
          createPost(post);
        })
      }

      const buttonSignOut = container.querySelector("#sign-out");

      if (buttonSignOut) {
        buttonSignOut.addEventListener('click', event => {
          event.preventDefault();
          signOutLogin();
        })
      }

    return container;
}//endArrowFunction