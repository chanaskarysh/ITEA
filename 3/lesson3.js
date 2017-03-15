// function click_1() {
//     console.log(this);
// }
//
// function click_2() {
//     console.log(this);
// }
//
// function click_3() {
//     console.log(this);
// }

// var blocks = document.getElementsByClassName('div_1');
// for (var i = 0; i < blocks.length; i++) {
//     blocks[i].onclick = function () {
//         console.log(this.style.background = '#ff9');
//     }
// }

// var block = document.getElementById('div_1');
// block.onclick = function () {
//     console.log(this.style.background = '#ff0');
// };

var blocks = document.getElementsByClassName('div_1');
for (var i = 0; i < blocks.length; i++) {
    blocks[i].onclick = function (event) {
        console.log(event);
    }
}
