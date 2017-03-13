// список всіх властивостей документу
// for(var index in document){
//     document.write(index + '<br/>');
// }
// var title = document.getElementById('title');
// var links = document.getElementsByClassName('link');
// console.log(title);
// console.log('=========');
// console.log(links);

//тип вузла документу
//console.log(document.documentElement.nodeType);

// children
//console.log(document.body.childNodes);

//add attr to wrapper
//var wrapper = document.getElementById('wrapper');

//wrapper.setAttribute('class', 'wrapper_class');

// Classes work
// var wrapper = document.getElementById('wrapper');
// console.log(wrapper.classList);
// wrapper.classList.add('wrapper_class1');
// wrapper.classList.remove('wrapper_class1');
// wrapper.classList.toggle('wrapper_class1');

// function fill() {
//     setTimeout(function () {
//         var square = document.getElementById('square');
//         square.style.backgroundColor = '#f00';
//     }, 2000);
// }
//
// function consoleView() {
//     console.log('some text');
// }
//
// var timeout = setTimeout(consoleView, 5000);
//
// setTimeout(function () {
//     clearTimeout(timeout);
//     console.log('cleared');
// }, 2000);
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
//     alert('End');
// }, 10000);


function register() {
    // var name, email, password;
    // if(document.getElementById('name').value){
    //     name = document.getElementById('name').value;
    // }
    // if(document.getElementById('email').value){
    //     email = document.getElementById('email').value;
    // }
    // if(document.getElementById('password').value){
    //     password = document.getElementById('password').value;
    // }
    //
    //
    // var patt = new RegExp(/\d/);
    // var result = patt.test(name);
    // console.log(result);
    var str = 'df Lorem ! Lorem ipsum dolor sit amet. consectetur adipisicing elit. Enim, quasi. Lorem';
    var pattern = new RegExp('Lorem', 'g');
    // var result = pattern.exec(str);
    // console.log(result);
    // var resultAll;
    // while((resultAll = pattern.exec(str)) != null){
    //     console.log('Founded ' + resultAll + ' in position '+ resultAll.index + '. Next search will start from '+ pattern.lastIndex);
    // }

    // console.log(str.search(pattern));

    // console.log(str.match(pattern));

    // var result = str.replace(pattern, 'Apple');
    // console.log(result);

    // var result = str.split('.');
    // console.log(result);

    var result = str.indexOf('!');
    console.log(result);
}