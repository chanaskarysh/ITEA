//function click_1(){
//    console.log(this);
//}
//
//function click_2(){
//    console.log(this);
//}
//
//function click_3(){ 
//    console.log(this);
//}
//
//var block = document.getElementById('div_1');
//block.onclick = function(){
//  alert('click');
//};


var blocks = document.getElementsByClassName('div_1');

for (var i = 0; i < blocks.length; i++) {
    blocks[i].onclick = function(event){
        //console.log(this.style.background = 'red');
        console.log(event);
    }
}