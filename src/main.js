import {
  homeScreen,
  loginScreen,
  registerScreen,
  welcomeScreen
} from './view'
import { isTheUserLoggedIn } from './controller';


const main = document.querySelector('#app');

window.addEventListener('hashchange', () => {
  main.innerHTML = "";
  switch (window.location.hash) {
    case " ":
      main.appendChild(welcomeScreen());
      break;
    case "#login":
      main.appendChild(loginScreen());
      break;
    case "#register":
      main.appendChild(registerScreen())
      break;
    case "#home":
      main.appendChild(homeScreen());
      break;
    default:
      main.appendChild(welcomeScreen());
  }
})

window.addEventListener('load', isTheUserLoggedIn);




