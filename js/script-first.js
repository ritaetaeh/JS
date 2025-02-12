const visibleP  = document.querySelector('.info-text');
const btnInfo = document.querySelector('.btnInfo');
btnInfo.onclick = function(){
    visibleP.classList.toggle('info-text-visible');
}

const Heart = document.querySelector('.favourite');
Heart.onclick = function(){
if (Heart.classList.toggle('favourite-change'))
alert('Товар добавлен в избранное!')
else {
    alert('Товар удален из избранного!')
}
}

/*вторая карточка*/
const visiblePS  = document.querySelector('.info-text-1');
const btnInfoS = document.querySelector('.btnInfo-1');
btnInfoS.onclick = function(){
    visiblePS .classList.toggle('info-text-visible');
}

const Heart1 = document.querySelector('.favourite-1');
Heart1.onclick = function(){
if (Heart1.classList.toggle('favourite-change'))
alert('Товар добавлен в избранное!')
else {
    alert('Товар удален из избранного!')
}
}