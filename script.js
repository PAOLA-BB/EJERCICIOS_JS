// EJE 1
let respuestaEjercicio1 = prompt("Eres bellisimo");

if(respuestaEjercicio1.toLowerCase() === "si") {
    alert("ciertamente.");
} else if(respuestaEjercicio1.toLowerCase() === "no"){
    alert("no te creo");
} else {
    alert("no te entiendo");
}

// EJE 2
let numero = (prompt("Ingrese un número: "));

switch (numero % 2) {
  case 0:
    alert(numero + " es divisible entre 2.");
    break;
  case 1:
    alert(numero + " no es divisible entre 2.");
    break;
  default:
    alert("El valor ingresado no es un número válido.");
    break;
}

//EJE 3
let numero = prompt("Ingrese un número: ");

if (numero % 2 === 0){
  alert(numero + " es par");
} else if(numero % 2 === 1){
  alert(numero + " NO es par");
} else{
  alert("valor incorrecto");
}


//EJE 4
let usuario = parseInt(prompt("Ingrese número de cliente: "));

if(usuario === 1000){
  alert("Ganaste un premio");
} else {
  alert("Lo sentimos, sigue participando");
}


//EJE 5
let numero1 = prompt("Ingrese primer número:");
let numero2 = prompt("Ingrese segundo número:");

if(numero1 < numero2){
  alert(numero1 + " es menor que " + numero2);
}else{
  alert(numero2 + " es menor que " + numero1);
}


//EJE 6
let numero1 = prompt("Ingrese primer número:");
let numero2 = prompt("Ingrese segundo número:");
let numero3 = prompt("Ingrese tercer número:");

if (numero1 > numero2 && numero1 > numero3) {
  alert(`${numero1} es el número mayor.`);
} else if (numero2 > numero1 && numero2 > numero3) {
  alert(`${numero2} es el número mayor.`);
} else if (numero3 > numero1 && numero3 > numero2) {
  alert(`${numero3} es el número mayor.`);
} else if (numero1 === numero2 && numero1 > numero3) {
  alert(`${numero1} y ${numero2} son iguales y es el número mayor`);
} else if (numero1 === numero3 && numero1 > numero2) {
  alert(`${numero1} y ${numero3} son iguales y es el número mayor`);
} else if (numero2 === numero3 && numero2 > numero1) {
  alert(`${numero2} y ${numero3} son iguales y es el número mayor`);
} else {
  alert("Los tres números son iguales.");
}


//EJE 7
let dia = prompt("Ingrese día de la semana:");

if(dia.toLowerCase() === "lunes"){
  alert("Hoy es Lunes");
} else if(dia.toLowerCase() === "viernes"){
  alert("Hoy es Viernes");
} else if(dia.toLowerCase() === "sabado"){
  alert("Hoy es Sabado");
} else if(dia.toLowerCase() === "domingo"){
  alert("Hoy es Domingo");
} else {
  alert("Día Incorrecto");
}


//EJE 8
let calificacion = parseInt(prompt("Ingrese calificación de 1 a 10: "));

if (calificacion >= 1 && calificacion <= 10) {
  alert("esta en el rango de calificación");

  if (calificacion < 6) {
    alert("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    alert("Regular");
  } else if (calificacion === 9) {
    alert("Bien");
  } else if (calificacion === 10) {
    alert("Excelente");
  }
} else {
  alert("ERROR");
}


//EJE 9
let topping = prompt("Selecciona un topping para tu helado (oreo / KitKat / brownie):");
let helado = 50;

if (topping.toLowerCase() === "oreo") {
  helado += 10;
  alert(`Helado con topping de oreo cuesta ${helado} MXN`);
} else if (topping.toLowerCase() === "kitkat") {
  helado += 15;
  alert("Helado con topping de kitkat cuesta " + helado + "MXN");
} else if (topping.toLowerCase() === "brownie") {
  helado = helado + 20;
  alert("Helado con topping de brownie cuesta " + helado + "MXN");
} else if (topping === "") {
  alert("El precio del helado sin Topping es de 50 MXN.");
} else {
  alert("no tenemos este topping, lo sentimos.");
}
*/

//EJE 10
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.

let programa = prompt("Ingrese programa educativo (course / carrera / master):");
let beca = prompt("Ingrese tipo de Beca: Facebook / Google / Jesua / No");

let course = 4999;
let carrera = 3999;
let master = 2999;
let totalCarrera = 0;
let total = 0;

Course: 2 meses
Carrera 6 meses
Master: 12 meses


if(programa.toLowerCase() === "course" && beca.toLowerCase() === "facebook") {
  totalCarrera = Math.round(course - (course * 20 / 100)) * 2;
  alert(`El programa Educativo nivel Course con Beca Facebook cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "course" && beca.toLowerCase() === "google") {
  totalCarrera = Math.round(((course - (course * 15 / 100)) * 2));
  alert(`El programa Educativo nivel Course con Beca Google cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "course" && beca.toLowerCase() === "jesua") {
  totalCarrera = Math.round(((course - (course * 50 / 100)) * 2));
  alert(`El programa Educativo nivel Course con Beca Jesua cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "carrera" && beca.toLowerCase() === "facebook") {
  totalCarrera = Math.round(((carrera - (carrera * 20 / 100)) * 6));
  alert(`El programa Educativo nivel Carrera con Beca Facebook cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "carrera" && beca.toLowerCase() === "google") {
  totalCarrera = Math.round(((carrera - (carrera * 15 / 100)) * 6));
  alert(`El programa Educativo nivel Carrera con Beca Google cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "carrera" && beca.toLowerCase() === "jesua") {
  totalCarrera = Math.round(((carrera - (carrera * 50 / 100)) * 6));
  alert(`El programa Educativo nivel Carrera con Beca Jesua cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "master" && beca.toLowerCase() === "facebook") {
  totalCarrera = Math.round(((master - (master * 20 / 100)) * 12));
  alert(`El programa Educativo nivel Master con Beca Facebook cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "master" && beca.toLowerCase() === "google") {
  totalCarrera = Math.round(((master - (master * 15 / 100)) * 12));
  alert(`El programa Educativo nivel Master con Beca Google cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "master" && beca.toLowerCase() === "jesua") {
  totalCarrera = Math.round(((master - (master * 50 / 100)) * 12));
  alert(`El programa Educativo nivel Master con Beca Jesua cuesta: ${totalCarrera}`);
} else if(programa.toLowerCase() === "course" && beca.toLowerCase() === "no") {
  total = course * 2; 
  alert(`El programa Educativo nivel Course cuesta: ${total}`);
} else if(programa.toLowerCase() === "carrera" && beca.toLowerCase() === "no") {
  total = carrera * 6; 
  alert(`El programa Educativo nivel Carrera cuesta: ${total}`);
} else if(programa.toLowerCase() === "master" && beca.toLowerCase() === "no") {
  total = master * 12; 
  alert(`El programa Educativo nivel Master cuesta: ${total}`);
} else {
  alert("no contamos con ese Programa")
} 


//EJE 11
let distancia = prompt("Ingrese distancia recorrida");
let litros50 = prompt("Ingrese Litros consumidos"); 
let vehiculo = prompt("Ingrese tipo de Vehículo coche / moto / autobus");

let coche = 0.20;
let moto = 0.10;
let autobus = 0.5;

if(litros > 0 && litros <= 100 && vehiculo.toLowerCase() === "coche"){
  litros = 5;
  totalPagar = (coche * distancia) + litros;
  alert(`Total a pagar : ${totalPagar}`);
} else if(litros > 100 && vehiculo.toLowerCase() === "coche"){
  litros = 10;
  totalPagar = (coche * distancia) + litros;
  alert(`Total a pagar  ${totalPagar}`);
} else if(litros > 0 && litros <= 100 && vehiculo.toLowerCase() === "moto"){
  litros = 5;
  totalPagar = (moto * distancia) + litros;
  alert(`Total a pagar : ${totalPagar}`);
} else if(litros > 100 && vehiculo.toLowerCase() === "moto"){
  litros = 10;
  totalPagar = (moto * distancia) + litros;
  alert(`Total a pagar : ${totalPagar}`);
} else if(litros > 0 && litros <= 100 && vehiculo.toLowerCase() === "autobus"){
  litros = 5;
  totalPagar = (autobus * distancia) + litros;
  alert(`Total a pagar : ${totalPagar}`)
} else if(litros > 100 && vehiculo.toLowerCase() === "autobus"){
  litros = 10;
  totalPagar = (autobus * distancia) + litros;
  alert(`Total a pagar : ${totalPagar}`);
} else{
  alert(`error`)
}

//total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.