// // var title = document.getElementById('title');
// // 			document.getElementsByName('name')
// // 			document.getElementsByTagName('div')

// // var links = document.getElementsByClassName('link');

// // console.log(title)
// // console.log('==============')
// // console.log(links)

// // Виведемо тип вузла документа
// // console.log(document.documentElement.nodeType);

// // Виведемо дочірні вузли
// // console.log(document.body.childNodes);

// // Додамо атрибут до wrapper
// // var wrapper = document.getElementById('wrapper');
// // var wrapperClases = wrapper.getAttribute('class');
// // var wrapperClasesNew = wrapperClases + ' wrapper_class'
// // wrapper.setAttribute('class', wrapperClasesNew);

// // Робота з классами
// // var wrapper = document.getElementById('wrapper');
// // console.log(wrapper.classList)
// // wrapper.classList.add('wrapper_class');
// // wrapper.classList.remove('example_class1');
// // function changeClass(){
// // 	wrapper.classList.toggle('example_class2');
// // }


// function fill(){
// 	setTimeout(function(){
// 		var square = document.getElementById('square');
// 		square.style.backgroundColor = 'red'
// 	}, 1000);
// }

// function consoleView(){
// 	console.log('Example text')
// }

// var timer = setTimeout(consoleView, 5000);

// setTimeout(function(){
// 	clearTimeout(timer)
// }, 3000);

// function changeClass(){
// 	var square = document.getElementById('square');
// 	square.classList.toggle('filled');
// }

// var interval = setInterval(changeClass, 1000);

// setTimeout(function(){
// 	clearInterval(interval);
// 	alert('The end');
// }, 10000);

function register(){
	// var name = document.getElementById('name').value;
	
	// var pattern = new RegExp(/\d/, 'gi');
	// var pattern = /\d/;
	// var result = pattern.test(name);
	// console.log(result);
	var str = 'fsdfsdf Lorem ! Lorem ipsum dolor sit amet Lorem';
	var patt = new RegExp("Lorem", 'g');
	// var result = patt.exec(str);
	// console.log(patt.exec(str))
	// console.log(patt.exec(str))
	// console.log(patt.exec(str))
	// console.log(patt.exec(str))

	// var resultAll;
	// while((resultAll = patt.exec(str)) != null){
	// 	console.log(resultAll);
	// 	// console.log('Знайдено ' + resultAll + " в позиції "
	// 	// 	+ resultAll.index + '. Настпуний пошук почнеться з: '
	// 	// 	+ patt.lastIndex);
	// }
	// console.log(str.match(patt));
	var result = str.split('!')
	console.log(result)
	console.log(str.indexOf('Lorem'))
}