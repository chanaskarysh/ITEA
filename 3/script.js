/**
 * Events
 */


function f(v) {
    console.log(this);
}

/**
 * Event on click
 */

var blocks = document.getElementsByClassName('div_1');

    for (var i = 0; i< blocks.length;i++)
    {
        blocks[i].onclick = function (event) {
            console.log(event);
        }
    }
