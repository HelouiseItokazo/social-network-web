import homeScreen from './pages/home/index.js'
import loginScreen from './pages/login/index.js'
import registerScreen from './pages/register/index.js'
import welcomeScreen from '../src/pages/welcome/index.js'
import { registerUser, signIn, signOutLogin } from '../src/index.js';


const main = document.querySelector('#app');

window.addEventListener('hashchange', () => {
  main.innerHTML = "";
  switch (window.location.hash) {
    case "#login":
      main.appendChild(loginScreen());
      const buttonSignIn = document.getElementById("sign-in");
      if (buttonSignIn) {
        buttonSignIn.addEventListener('click', event => {
          event.preventDefault();
          signIn();
        })
      }
      break;
    case "#register":
      main.appendChild(registerScreen());
      const buttonRegister = document.getElementById("register");
      if (buttonRegister) {
        buttonRegister.addEventListener('click', event => {
          event.preventDefault();
          registerUser();
        });
      }
      break;
    case "#home":
      main.appendChild(homeScreen());
      const buttonSignOut = document.getElementById("sign-out");
      if(buttonSignOut){
        buttonSignOut.addEventListener('click', event => {
          event.preventDefault();
          signOutLogin();
        })
      }
      break;
  }
})

window.addEventListener('load', () => {
  main.appendChild(welcomeScreen());
})




