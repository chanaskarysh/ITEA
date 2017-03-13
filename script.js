
// Homework
var list = document.getElementById('car');

function addAttribute() {
    firstChild = list.firstElementChild;
    firstChild.setAttribute('class', 'japanese');
}

function del() {
    findAttribute = document.getElementById('red');
    findAttribute.removeAttribute('id');
}

function third() {
    attr = list.firstElementChild.getAttribute('id');
    firstElement = list.firstElementChild;
    secondElement = firstElement.nextElementSibling;
    thirdElement = secondElement.nextElementSibling.setAttribute('id', attr);
}

function addClass() {
    arr = Array.prototype.slice.call(list.getElementsByTagName('li')); // get collection and convert to array for loop
    arr.forEach(function (item, arr) {
        item.classList.add('extra-class');
    });
}

function changeClass() {
    list.lastElementChild.classList.toggle('new-class');
}

/// --///


function register() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var pass = document.getElementById('password').value;
    var str = 'Lorem  ! Lorem ipsum dolor sit amet';
    var patt = new RegExp("Lorem", 'g');
    // var result = patt.exec(str);
    // console.log(result);
    // var resultAll;
    // while( (resultAll = patt.exec(str)) != null ){
    //     console.log('Знайдено ' + resultAll + ' в позиції ' + resultAll.index + '. Наступний пошук почнеться з :'
    //     + patt.lastIndex);
    // }
    var result = str.split('!');
    console.log(result);
}