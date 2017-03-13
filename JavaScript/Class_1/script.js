// var title = document.getElementById('title');
//
// var links = document.getElementsByClassName('link');
//
// console.log(title)
// console.log('==========')
// console.log(links)

// Виведемо тип вузла документа
// console.log(document.documentElement.nodeType);
//
// // Виведемо дочірні вузли
// console.log(document.body.childNodes);

// Додамо атрибут до wrapper
// var wrapper =  document.getElementById('wrapper');
// var wrapperClases = wrapper.getAttribute('class');
// var wrapperClasesNew = wrapperClases + 'wrapper_class'
// wrapper.setAttribute('class', wrapperClasesNew);

// Робота з класами
var wrapper = document.getElementById('wrapper');
console.log(wrapper.classList)
wrapper.classList.add('wrapper_class');
wrapper.classList.remove('example_class1');
function changeClass(){
    wrapper.classList.toggle('example_class2');
}

