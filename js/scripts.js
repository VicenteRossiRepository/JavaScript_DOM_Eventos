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