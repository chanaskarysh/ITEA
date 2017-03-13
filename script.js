// var array = [];
	// for(var i = 1; i <= 8; i++)
	// {
	// 	for(var a = 1; a<=8;a++)
	// 	{
	// 		if(i%2 == 1)
	// 		{
	// 		if( a%2 == 1)
	// 		{
	// 			document.write('1');
	// 		}else{
	// 			document.write('0');
	// 		}
	// 	}else{
	// 		if( a%2 == 1)
	// 		{
	// 			document.write('0');
	// 		}else{
	// 			document.write('1');
	// 		}
	// 	}
	// 	}
	// 	document.write('<br>');
	// }

// function attrLi(){
// 	document.getElementsByTagName("li")[0].setAttribute("title", "I added this attribute");
// }
// function attrLiRemove(){
// 	document.getElementsByTagName("li")[1].removeAttribute("class");
// }
// function attrChildLi(){



// 	document.getElementsByTagName("li")[0].hasAttribute("title");
// 	document.getElementsByTagName("li")[0].removeAttribute("title");
// 	document.getElementsByTagName("li")[2].hasAttribute("title");
// 	document.getElementsByTagName("li")[2].removeAttribute("title");
//     document.getElementsByTagName("li")[2].setAttribute("title", "I added this attribute");

// }
// function attrClassLi(){
// 	var wrapper = document.getElementById("list").children;
// 	var i;
// 	for (i = 0; i < wrapper.length; i++) {
//     wrapper[i].setAttribute('class','link');
// }
// }

// function toggleClass(){
// 	lastLi.classList.toggle('link');
// }
// function fill(){
// 	setTimeout(function(){
// 	var square = document.getElementById('square');
// 	square.style.backgroundColor = 'red';
//  }, 1000);
// }


// function consoleView(){
// 	console.log('Exaple text')
// }
// var time = setTimeout(consoleView, 2000);

// setTimeout(function(){
// 	clearTimeout(timer)
// }, 1000);

// function changeClass(){
// 	var square = document.getElementById('square');
// 	square.classList.toggle('filled');
// }

// var interval = setInterval(changeClass, 1000);
// 	setTimeout(function(){
// 	clearInterval(interval);
// 	alert('The end')
// },1000);

// function reg(){
// 	var name , email , password;
// if(document.getElementById('name').value.length >0 ){
// 	name = document.getElementById('name').value;
// }
// if(document.getElementById('email').value.length >0 ){
// 	email = document.getElementById('email').value;
// }

// if(document.getElementById('password').value.length >0 ){
// 	password = document.getElementById('password').value;
// }


// console.log(name ,email , password)
// }

// function reg(){
// 	var name = document.getElementById('name').value;

// 	var pattern = new RegExp(/\d/);
// 	var pattern =/\d/;
// 	var result = pattern.test(name);
// 	console.log(result);
//  }
// function reg(){
// 	var str = 'lorem ! lorem ipsum dolor sit amet';
// 	var patt = new RegExp('lorem' , 'g');
// 	// var result = patt.exec(str);
// 	// console.log(result)
// 	var resultAll;
// 	while((resultAll = patt.exec(str)) != null){
// 		console.log('Find ' + resultAll + 'in position'  + " " +  resultAll.index + '. Next find begin with:' + " " + patt.lastIndex);
// 	}
// }

// function reg(){
// 	var str = 'lorem ! lorem ipsum dolor sit amet , lorem';
//     var patt = new RegExp('lorem' , 'g');
//    var result = str.split('!');
//    console.log(result)
// }