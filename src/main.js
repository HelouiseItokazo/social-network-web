import {
  homeScreen,
  loginScreen,
  registerScreen,
  welcomeScreen
} from './view'
import { isTheUserLoggedIn } from './controller';

const main = document.querySelector('#app');

window.addEventListener('hashchange', () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '':
      main.appendChild(welcomeScreen());
      break;
    case '#login':
      main.appendChild(loginScreen());
      break;
    case '#register':
      main.appendChild(registerScreen())
      break;
    case '#home':
      main.appendChild(homeScreen());
      break;
  }
})

window.addEventListener('load', (event) => {
  event.preventDefault()
  isTheUserLoggedIn
    .then(() => main.appendChild(homeScreen()))
    .catch((error) => {
      main.appendChild(welcomeScreen());
      console.log(error.message);
    })

});




