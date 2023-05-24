export default () => {
    const container = document.createElement('section');

    const template = `
        <h1>Bem vindo!</h1>
        <nav>
            <a href="/#login">Login</a>
            <a href="/#register">Cadastrar</a>
        </nav>
    `;

    container.innerHTML = template;
    
    return container;
}