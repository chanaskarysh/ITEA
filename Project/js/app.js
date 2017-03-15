//Modal windoe control

var modalButtons = document.getElementsByClassName('modal_button');
var modalWindow = document.getElementsByClassName('modal_wrapper')[0];

function toggleModal() {
  modalWindow.classList.toggle('hidden_wrap')
}
for (var i = 0; i < modalButtons.length; i++) {
  modalButtons[i].onclick = toggleModal;
}

var reg_btn=document.getElementById('reg_btn');

function validate() {
  var input =document.getElementsByClassName('form-control');
  for (var i = 0; i < input.length; i++) {
    if(input[i].value <= 0) {
      input[i].classList.add('wrong_data');
    }else{
      input[i].classList.remove('wrong_data');
    }
  }
}
reg_btn.onclick=validate;
