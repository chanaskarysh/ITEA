
/**
 * Function add class to each element
 */
function changeCLass() {

    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i< inputs.length; i++)
    {
        inputs[i].classList.add('text-center');
    }
}
/**
 * Function add atribure to first element
 */
function addFirstAttr() {
    element = document.getElementById('email').setAttribute('required', true);
}

/**
 * Function delete  atribure from second element
 */
function removeSecondAttr() {
    element = document.getElementById('pwd').removeAttribute('placeholder');
}

/**
 * Function change attribute from first element to second
 */
function changeAttribute() {
    firstAttr = document.getElementById('email').getAttribute('placeholder');
    document.getElementById('conf_pwd').setAttribute('placeholder', firstAttr);
}

/**
 * Toggle class on checkbox
 */
function toggleClass() {
    document.getElementById('check').classList.toggle('disabled');
}