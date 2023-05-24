export default () => {

    const container = document.createElement('section');

    const template = `
        <h1>Home</h1>
        <button id="sign-out">Voltar</button>
    `;

    container.innerHTML = template;

    return container;
}