// // JAVA AVANZAND
// document.querySelector("button").addEventListener("click",handleClick); - escoje un Elemento, añades un evento y ejecutas una funcion
// EJ: escoje boton, cuando se haga click ejecuta la funcion handleClick,  se pone la funcion como nombre entrada para usar a posterior 

// USO DE FOR : 
// var numbre = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numbre; i++) { - lo que hace el for es crear todos los eventos click y luego los ocupas
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//      this.style.color="black"; - this, es el objeto especifo o elemento al que se le agrego el evento, se le pueden agregar metodos y modificarlos
//      this.innerHTML; - ej: accede al t contenido, este caso letras.
//     });

// AUDIO :
// var audio = new Audio('URL de internet o de tus carpetas'); - creas un objeto 
// audio.play(); - usas sus metodos, ej : reproducir la cancion
//


// function add(num1,num2){
//     return num1 + num2;
// }
// function multi(num1, num2){
//     return num1 + num2;
// }
// function calculator(num1, num2, operator){
//     return operator(num1,num2); 


// document.addEventListener("keypress",function(event){ - event es el objeto de cada tecla que se presiona o por el que se ingresa(h1,img,etc)
//     console.log(event); - muestra toda su composison
//     letter=event.key; - guarda el valor de la letra como string
// })













OBJETOS:

function People(name, years, languages) {
    this.name = name;
    this.years = years;
    this.languages = languages;
    this.move = function () {
        alert("hola como estas");
        move();
    }
}

ejample:
var people1 = new People("daniel", 21, ["Spanish,English"]);
var people2 = new People("alejandra", 25, ["Spanish,English"]);














