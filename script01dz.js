function one(){
    var one = document.getElementsByClassName('item')[0];
    one.setAttribute('data-first', 'first');
}

function two(){
    var two = document.getElementsByClassName('item')[1];
    two.removeAttribute('data-second');
}

function three(){
    var three_one = document.getElementsByClassName('item')[0];
    var three_three = document.getElementsByClassName('item')[2];
    three_three.setAttribute('data-custom',three_one.getAttribute('data-custom'));
}

function four(){
    var four = document.getElementsByClassName('item');
    for(var i=0; i < four.length; i++) {
        four[i].classList.add('custom_class');
    }
}


var five = document.getElementsByClassName('item')[4].addEventListener("click", function() {
    // display the current click count inside the clicked div
    this.classList.toggle('good');
});