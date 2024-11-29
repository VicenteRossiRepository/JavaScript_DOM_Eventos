//querySelector
const heading = document.querySelector('.header__texto h2') // 0 o 1 elementos
heading.textContent = 'Nuevo Heading'
console.log(heading)

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)

enlaces[0].textContent = 'Nuevo texto para enlaces'

enlaces[0].href = 'http://google.com'
enlaces[0].classList.add('nueva-clase')
// enlaces[0].classList.remove('navegacion__enlace')

//GetElementById

const heading2 = document.getElementById('heading')
console.log(heading2)

//Generar enlace en JS
const nuevoEnlace = document.createElement('A')
//Agregar el HREF
nuevoEnlace.href = 'nuevo-enlace.html'
//Agregar texto
nuevoEnlace.textContent = 'Nuevo enlace'
//Agregar clase
nuevoEnlace.classList.add('navegacion__enlace')
//Agregar al documento

document.querySelector('.navegacion').appendChild(nuevoEnlace)

console.log(nuevoEnlace)


//Eventos
console.log(1)

window.onload = function (){
    console.log(3)
}
window.addEventListener('load', function (){ //load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2)
});

document.addEventListener('DOMContentLoaded', function(){ //DOMContentLoaded solo espera que se carge el HTML y nada mas
    console.log(4)
})

console.log(5)


window.onscroll = function(){
    console.log('Scroll')
}


//Seleccionar elementos y asociar eventos
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click',function(e) {
    console.log(e);
    e.preventDefault(); //Previene el comportamiento por defecto del evento; sirve para validar formularios
    console.log('Botón enviado');
});