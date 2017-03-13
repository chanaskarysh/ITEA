var changeId = function(){
    var demo = document.getElementById("list");
    demo.firstElementChild.setAttribute("id" , "first");
}

var secondId = function(){
    var demo = document.getElementById("list");
    demo.firstElementChild.nextElementSibling.setAttribute("id", "second");
}

var thirdId = function(){
    var demo = document.getElementById("second");
    var first = document.getElementById("first");
    var temp = first.getAttribute("id");
    temp.toString();
    demo.nextElementSibling.setAttribute("id", temp);
}

function addClass(){
    var c = document.getElementById("list").childNodes;
    c[1].setAttribute("class", "temp");
    c[3].setAttribute("class", "temp");
    c[5].setAttribute("class", "temp");
    c[7].setAttribute("class", "temp");
}
function changeClass(){
    var c = document.getElementById("list").childNodes;
    c[7].setAttribute("class", "fourClass");
}