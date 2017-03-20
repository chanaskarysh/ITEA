/**
 * Modal window control
 */
var modal_butons = document.getElementsByClassName('btn_modal');
var modal = document.getElementsByClassName('modal_wrapper')[0];
var md = document.getElementsByClassName('success_modal')[0];


/**
 * toggle function to modal
 */
function toggleModal() {
    modal.classList.toggle('modal_hidden');
    closeModalOnEscape(modal);
}


function toggleSuccess() {
    md.classList.toggle('modal_hidden');

}

/**
 * close modal on Escape
 * @param modal
 */
function closeModalOnEscape(modal) {
    if (modal.className.indexOf('modal_hidden') == -1) {
        document.onkeydown = function (event) {
            if (event.keyCode == 27) {
                modal.classList.add('modal_hidden');
            }
        }
    }
}

for (var i = 0; i < modal_butons.length; i++) {
    modal_butons[i].onclick = toggleModal;
}


/**
 * function validate EMail
 */
function validateEmail() {
    var email = document.getElementById('email_span');
    var email_input = document.getElementById('email');
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email_input.value) == true) {
        email.classList.remove('fa-ban');
        email.classList.add('fa-check');
    } else {
        email.classList.remove('fa-check');
        email.classList.add('fa-ban');
    }
}

/**
 * function validate Password
 */
function validatePassword() {
    var password = document.getElementById('password_span');
    var password_input = document.getElementById('password');
    var re = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/i;
    if (re.test(password_input.value) == true) {
        password.classList.remove('fa-ban');
        password.classList.add('fa-check');
    } else {
        password.classList.remove('fa-check');
        password.classList.add('fa-ban');
    }
}

/**
 * function Validate Confrim Password
 */
function validateConfirmPassword() {
    var password = document.getElementById('confirm_span');

    var password_input = document.getElementById('password');
    var confirm_input = document.getElementById('confirm');

    var re = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/i;
    if (re.test(confirm_input.value) == true && confirm_input.value == password_input.value) {
        password.classList.remove('fa-ban');
        password.classList.add('fa-check');
    } else {
        password.classList.remove('fa-check');
        password.classList.add('fa-ban');
    }
}

/**
 * function validate Name
 */
function validateName() {
    var re = /^[a-zA-Z ]{3,30}$/i;

    var name = document.getElementById('name_span');
    var name_input = document.getElementById('name');

    if (re.test(name_input.value) == true) {
        name.classList.remove('fa-ban');
        name.classList.add('fa-check');
    } else {
        name.classList.remove('fa-check');
        name.classList.add('fa-ban');
    }


}

/**
 * get users from session storage
 * @type {Array}
 */
var users = [];
users = JSON.parse(sessionStorage.getItem("users"));

if (users == null) {
    users = [];
}
var obj = '';


/**
 * validate function
 */
function validate() {

    var inputs = document.getElementsByClassName('form-control');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value <= 0) {
            inputs[i].classList.add('wrong_data');
        } else {
            inputs[i].classList.remove('wrong_data');

        }
    }
    var wrong_data = document.getElementsByClassName('wrong_data');
    var ban_span = document.getElementsByClassName('fa-ban');


    if (wrong_data.length == 0 && ban_span.length == 0) {
        obj = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: md5(document.getElementById('password').value)
        };

        if (users.push(obj)) {
            modal.classList.toggle('modal_hidden');

            sessionStorage.setItem('users', JSON.stringify(users));
            var usr = sessionStorage.getItem('users');
            document.getElementById('alert').classList.add('alert-success');
            document.getElementById('alert_message').innerHTML = "<strong>Success!</strong> User saved sucsessfuly!";
            md.classList.remove('modal_hidden');
            closeModalOnEscape(md);

        }

    } else {
        document.getElementById('alert').classList.add('alert-danger');
        document.getElementById('alert_message').innerHTML = "<strong>Danger!</strong> Please input valid data and try again!";
        md.classList.remove('modal_hidden');    }
}

var registr = document.getElementById('reg_btn');

registr.onclick = validate;