// DOM DOM DOM DOM

// alert("hola");
// #document - la representacion del todo el archivo

// document.firstElementChild; - Imprime primer Elemento, seria el HTML

// document.firstElementChild.firstElementChild; - imprime HEAD 
// document.firstElementChild.lastElementChild; - imprime BODY


// document.firstElementChild.lastElementChild.firstElementChild.innerHTML = " Good Bye"; - cambia su valor ej: h1

// document.firstElementChild.lastElementChild.firstElementChild.style.color = "red"; - cambio stilo al color

// document.querySelector("input").click(); - escoge de todo el documento, ademas agrega un metodo, que simula el click

// document.getElementsByTagName("li"); -  ej : busca los 3 "li" como matriz, usas[0], juntos a sus propiedades

// document.getElementsByClassName("btn"); - busca las clases y trae como matriz

// document.getElementById("title"); - obtiene unico elemento ej: h1  
// Ej: example.innerHTML = "Good Bye";  modifica texto previo "hello to my web"

// document.querySelector("h1"); - elements ,("#title") - id ,(".btn") - class, SOLO DEVUELVE EL PRIMERO SI MAS DE UNO CUMPLE LAS CONDICIONES 

// document.querySelector("li a"); = <a href="https://www.youtube.com">youtube</a>, "li a" espacio por que son dos elementos por separado
// document.querySelector("li.item"); - "li.item" juntos por que la clase esta dentro del elemento
// document.querySelector("#list a"); = <a href="https://www.youtube.com">youtube</a>, "#list a" espacio por que id y elemento estan separados
// document.querySelector("h1").style.color = "red";

// document.querySelectorAll("#list .item"); - uso del indice [0]

// document.querySelector("button").classList; - lista de clases adjuntas a ese elemento
// Ej: example.add("invisible"); - agrega una clase al la lista 
//     example.remove("invisible"); 
//     example.toggle("invisible"); - alterna si agregas o eliminas

// document.querySelector("h1").textContent; - (.innerHTML) el primero accede a solo al texto, el segundo a todo lo que lleva la etiqueta h1

// document.querySelector("a").attributes; - accede a una lista con atributos de la etiqueta, ej href, class, src 
// Ej: example.getAttribute("href"); - accede a atributo especifico, ej "https://www.youtube.com"
//     example.setAttribute("href","https://www.pinterest.cl"); - busca y cambia el contenido







