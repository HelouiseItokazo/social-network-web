export default () => {

    const container = document.createElement('section');

    const template = `
        <h1>Home</h1>
        <input id="post" type="text">
        <button id="send">Publicar</button>
        <button id="sign-out">Voltar</button>
    `;

    container.innerHTML = template;

    return container;
}