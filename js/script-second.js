alert('Добро пожаловать!');

document.querySelector("#show-login").addEventListener('click', function(){
  document.querySelector('.popup-login').classList.add("popup-login-active");
});
document.querySelector(".popup-login .btn-close").addEventListener('click', function(){
  document.querySelector('.popup-login').classList.remove("popup-login-active");
});


