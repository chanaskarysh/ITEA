// function fill() {
//     setTimeout(function () {
//         var square = document.getElementById('square');
//         square.style.backgroundColor = '#00f';
//     }, 1000)
// }
//
// function consoleView() {
//     console.log('Example Text');
// }
//
// var timer = setTimeout(consoleView, 5000);
//
// setTimeout(function () {
//     clearTimeout(timer)
// }, 3000);
//
// function changeClass() {
//     var square = document.getElementById('square');
//     square.classList.toggle('filled');
// }
//
// var interval = setInterval(changeClass, 1000);
//
// setTimeout(function () {
//     clearInterval(interval);
//     alert('The end');
// }, 10000);

function register() {
    // var in_name = document.getElementById('name').value;
    //
    // var pattern = new RegExp(/\d/, 'gi');
    // var result = pattern.test(in_name);
    // console.log(result);

    // if (in_name != '') {
    //     console.log(in_name);
    // }
    //
    // var in_email = document.getElementById('email');
    // if (in_email.value != '') {
    //     console.log(in_email.value);
    // }
    //
    // var in_password = document.getElementById('password');
    // if (in_password.value != '') {
    //     console.log(in_password.value);
    // }

    var str = 'Lorem ! Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
    var patt = new RegExp('Lorem', 'g');
    // var result = patt.exec(str);
    // console.log(result);

    // var resultALL;
    // while((resultALL = patt.exec(str)) != null) {
    //     console.log('Знайдено ' + resultALL + ' в позиції ' + resultALL.index + '. Наступний пошук почнеться з: ' + patt.lastIndex);
    // }

    // console.log(str.search(patt));
    // console.log(str.match(patt));

    // var result = str.replace(patt, 'Apple');
    // console.log(result);

    // var result = str.split(' ! ');
    // console.log(result);

    var result = str.indexOf('Lorem');
    console.log(result);
}
