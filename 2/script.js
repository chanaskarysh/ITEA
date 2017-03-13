// /**
//  * Timeout function
//  */
// function changeStyle() {
//     setTimeout(function () {
//         document.getElementById('square').style.backgroundColor = 'red';
//         document.getElementById('square').style.borderRadius = '50%';
//     }, 1000);
//     setTimeout(function () {
//         document.getElementById('square').removeAttribute('style');
//     }, 4000);
// }
//
// /**
//  * console
//  */
// function consoleView() {
//     console.log("Example text");
// }
//
// /**
//  * create new timeout
//  * @type {number}
//  */
// var timer = setTimeout(consoleView, 5000);
//
// /**
//  * Clear timeout timer
//  */
// setTimeout(function () {
//     clearTimeout(timer)
// });
//
// /**
//  * Change class to element
//  */
// function changeClass() {
//     document.getElementById('square').classList.toggle('filled');
// }
//
// /**
//  * Create new interval
//  * @type {number}
//  */
// var interval = setInterval(changeClass, 1000);
//
// /**
//  * Clear interval
//  */
// setTimeout(function () {
//     clearInterval(interval);
//     alert("Finished");
// }

//////////////////////////////////////////////////////////Regular\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/**
 * Add all field to array
 */
function registr() {
    var regstr = [];
    var nameInput = document.getElementById('email').value;
    if(nameInput.length >0)
    {
        regstr['name'] = nameInput;
    }
    var pattern = new RegExp(/\d/);
    var result = pattern.test(regstr['name']);
    console.log(result);
    var passwordInput = document.getElementById('pwd').value;

    if(passwordInput.length >0)
    {
        regstr['pwd'] = passwordInput;
    }
    var cpwdInput = document.getElementById('confirm').value;
    if(cpwdInput.length >0)
    {
        regstr['cpwd'] = cpwdInput;
    }
    console.log(regstr);
}

/**
 * regular function
 */
function regularFunction() {
    var str = "Lorem ipsum Lorem dolor sit amet";
    var patt = new RegExp("Lorem" , "g");

    var resultAll;
    while ((resultAll = patt.exec(str)) != null){
        console.log('Found ' + resultAll + " In " + resultAll.index + ". Next find will start from : " + patt.lastIndex);
    }
    var result = str.replace(patt,"Apple");
    console.log(result);
}

/**
 * \w - будь які літерали
 * \d - будь яка цифра
 * \W - не Літерал (пропустить все що не є літералом)
 * \D - не цифра
 * \s - спец символи включаючи пробіли
 */