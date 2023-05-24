export default () => {
    const container = document.createElement('section');

    const template = `
        <h1>Bem vindo!</h1>
    `;

    container.innerHTML = template;
    
    return container;
}