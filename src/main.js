import homeScreen from './pages/home/index.js'
import loginScreen from './pages/login/index.js'
import registerScreen from './pages/register/index.js'
import welcomeScreen from '../src/pages/welcome/index.js'
import { registerUser, signIn, signOutLogin, isTheUserLoggedIn, createPost } from '../src/index.js';


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
          const email = document.getElementById("email-login").value;
          const password = document.getElementById("password-login").value;
          signIn(email, password);
        })
      }
      break;
    case "#register":
      main.appendChild(registerScreen())
      const buttonRegister = document.getElementById("register");
      if (buttonRegister) {
        buttonRegister.addEventListener('click', event => {
          event.preventDefault();
          const emailRegister = document.getElementById("email-register").value;
          const passwordRegister = document.getElementById("password-register").value;
          registerUser(emailRegister, passwordRegister);
        });
      }
      break;
    case "#home":
      main.appendChild(homeScreen());
      const buttonSignOut = document.getElementById("sign-out");
      if (buttonSignOut) {
        buttonSignOut.addEventListener('click', event => {
          event.preventDefault();
          signOutLogin();
        })
      }
      const buttonSend = document.getElementById("send");
      if (buttonSend) {
        buttonSend.addEventListener('click', event => {
          event.preventDefault();
          const post = document.getElementById("post").value;
          createPost(post);
          //signOutLogin();
        })
      }
      break;
  }
})

window.addEventListener('load', () => {
  main.appendChild(welcomeScreen());
  isTheUserLoggedIn();
})




