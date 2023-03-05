
alert("helo"); // [alert()]fuction
prompt("hola como esras, te gustaria hablar un rato");// hace una pregunata 

var Name = "Charly";// ctrl+k+c
alert(Name);

var yourName = prompt("hola como esras, te gustaria hablar un rato");
alert("My name is " + Name + ", and your name is " + yourName + " , best friends");

Name.slice(0, 1);// extraer caracter ej: Charly = "C", va del 0 al 1 sin contar estre ultimo
Name.slice(0, 3);// region mas grande
alert(prompt("escribe tu mensaje: ").slice(0, 140));

Name.toUpperCase();// retorna palaba solo en mayusculas
Name.toLowerCase();// retorna en miniscula

// Name.slice(0,1).toUpperCase

var uno = Name.slice(0, 1).toUpperCase();
var dos = Name.slice(0, Name.length).toLowerCase();

var tres = uno + dos;

var n = Math.random(); // genera n ramdon menor a 1
n = n * 6; // mantiene rango de 1 a 6

n = Math.floor(n); // me imagino que quita la parte decimal

// === is equal to, tambien en tipo [string - int]
// == is equal to, no importa el TIPO
// !== is not equal to
// > is greater than
// < is lesser than
// >= is greater or equal to
// <= is lesser or equal to


// [ ARRRY ]

var name = ["carlos", "sergio", "kersen", "bruno"];
alert(name[0]);
name.includes("tobal");// averiguar si existe dentro del array [true or false]

var lastName = [];
lastName.push("EXAMPLE");
lastName.pop(); // ultimo en la fila

//while 
while (true) {
    // ocurre mientras sea true
}

// For
for (var i = 0; i < 100; i++) {
    // insert function EXAMPLE(){}
}

function name (){
}
 function lastName(x){
    
 }






