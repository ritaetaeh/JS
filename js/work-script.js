const BtnMessage = document.querySelector('.BtnSend');
const Message = document.querySelector('.message');
const MessageText = document.querySelector('.message__text');

BtnMessage.onclick = function(){
    MessageText.classList.toggle('message-active');
}