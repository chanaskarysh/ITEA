//function fill(){
//    setTimeout(function(){
//        var square = document.getElementById('square');
//        square.style.backgroundColor = 'red';
//    }, 1000)
//}
//
//function consoleView(){
//    console.log('Example Text');
//}
//
//var timer = setTimeout(consoleView, 5000);
//
//setTimeout(function(){
//    clearTimeout(timer);
//}, 3000);
//
//function changeClass(){
//    var square = document.getElementById('square');
//    square.classList.toggle('filled');
//}
//
//var interval = setInterval(changeClass, 1000);
//
//setTimeout(function(){
//    clearInterval(interval);
//    alert('The end');
//}, 10000);

//function register(){
//    var a = document.getElementById('name').value;
//    var b = document.getElementById('email').value;
//    var c = document.getElementById('password').value;
//
//    if(a != ''){
//        console.log(a);
//    }
//    if(b != ''){
//        console.log(b);
//    }
//    if(c != ''){
//        console.log(c);
//    }
//}
//
//var patt = /abc/;
//var patt = new RegExp('abc');

//function register(){
//    var name = document.getElementById('name').value;
//
//    //var pattern = new RexExp(/\d/);
//    var pattern = /\d/;
//    var result = pattern.test(name);
//    console.log(result);
//}

function register1(){
    var str = 'lorem ! lorem ipsum dolor sit amet lorem';
    var patt = new RegExp('lorem', 'g'); // g це для показу що пошук до кінця строки
    //var result = patt.exec(str);
    //console.log(result);

    console.log(patt.exec(str));
    console.log(patt.exec(str));
    console.log(patt.exec(str));
    console.log(patt.exec(str));

    var resultAll;
    while((resultAll = patt.exec(str)) != null) {
        console.log(resultAll);
        //console.log('Знайдено ' + resultAll + " в позиції " + resultAll.index + '. Настпуний пошук почнеться з: ' + patt.lastIndex);
    }
}

function register(){
    var str = '! lorem ipsum dolor sit amet lorem';
    var patt = new RegExp('lorem', 'g'); // g це для показу що пошук до кінця строки
    //var result = patt.exec(str);
    //console.log(result);

   //console.log(str.search(patt)); // пошук елемента і визначення його розташування (працює лише раз)
   //console.log(str.match(patt)); // повертає масив із шуканими значеннями
   //var result = console.log(str.replace(patt, 'Apple')); // пошук елемента і визначення його розташування (працює лише раз)
   // console.log(result);

    //var result = str.split('|');
    //console.log(result);

    console.log(str.indexOf('lorem'));

}