export default () => {

    const container = document.createElement('section');

    const template = `
    <form>
      <h1>Cadastro</h1>
      <input id="email-register" type="text" placeholder="Informe seu e-mail">
      <input id="email-confirmation-register" type="text" placeholder="Confime seu e-mail">
      <input id="password-register" type="text" placeholder="Informe sua senha">
      <input id="password-confirmation-register" type="text" placeholder="Confirme sua senha">
      <button id="register">Cadastrar</button>
    </form>
    `;

    container.innerHTML = template;

    return container;

}