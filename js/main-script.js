const BGchange = document.querySelector('body');
const BtnChange = document.querySelector('.btn-change');

BtnChange.onclick = function(){
    BGchange.classList.toggle('message-active');
}