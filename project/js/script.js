// modal window control
var modalButtons = document.getElementsByClassName('modal_button');
var modalWindow = document.getElementsByClassName('modal_wrapper')[0];

function toggleModal() {
    modalWindow.classList.toggle('hidden_wrapper');
}

for (var i = 0; i < modalButtons.length; i++){
    modalButtons[i].onclick = toggleModal;
}

var reg_button = document.getElementById('reg_btn');

function validate() {
    var inputs = document.getElementsByClassName('form-control');
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value.length <= 0){
            inputs[i].classList.add('empty_data');
        }else{
            inputs[i].classList.remove('empty_data');
        }
    }
}
reg_button.onclick = validate;