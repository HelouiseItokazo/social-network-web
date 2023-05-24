export default () => {

    const container = document.createElement('section');

    const template = `
    <form>
        <input id="email-login" type="text" placeholder="Informe seu e-mail">
        <input id="password-login" type="text" placeholder="Informe sua senha">
        <button id="sign-in">Entrar</button>
    </form>
    `;

    container.innerHTML = template;

    return container;
}