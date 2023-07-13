//1ER CLASE
let numA = Number(prompt("Ingrese un valor numerico A", 5))
let numB = Number(prompt("Ingrese un valor numerico B", 5))
//concatena, ¿Por qué? porque hay un valor de tipo string
let resultadoAyB1 = numA + "" + numB
//suma, ¿Por qué? porque no hay un string
let resultadoAyB2 = numA + numB
alert( resultadoAyB2 )
console.log( resultadoAyB2 )
//FIN---------------------------------------------------------------------------------

//Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
let unNumero = 5

let otroNumero = Number(prompt("Ingrese un número"))

let resultado = unNumero + otroNumero

console.log(resultado);
//FIN--------------------------------------------------------------------------------

//Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
let textoA = prompt("Ingrese un texto")
let textoB = prompt("Ingrese un texto")
let resultadoTextos = textoA + textoB

alert(resultadoTextos);
//FIN--------------------------------------------------------------------------------

//SUMAS, RESTAS, MULTIPLICACIÓN Y DIVISIÓN
let dinero = 100000;

let extra;

let total;


if( dinero <= 10 ){

    extra = dinero * 0.1

    total = extra + dinero

}else if( dinero <= 100 ){

    extra = dinero * 0.2

    total = extra + dinero

}else{

    extra = dinero * 0.5

    total = extra + dinero

}

console.log("Dinero con el cuál inicié: " + dinero)

console.log("Extra ganado: " + extra)

console.log("El total es de: "+ total)
//FIN-------------------------------------------------------------------------------------


//Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
let unNumero = 5

let otroNumero = Number(prompt("Ingrese un número"))

let resultado = unNumero + otroNumero

console.log(resultado);
//FIN----------------------------------------------------------------------------------------

//Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

let textoA = prompt("Ingrese un texto")

let textoB = prompt("Ingrese un texto")

let resultadoTextos = textoA + textoB

alert(resultadoTextos);
//FIN-----------------------------------------------------------------------------------------

let rta = ""
//Repetimos con While hasta que el usuario ingresa "ESC"
while (rta != "ESC") {
    //1- Le pregunto el nombre
    let nombre = prompt("¿Cuál es su nombre?")
    //2- Le pregunto el apellidO
    let apellido = prompt("¿Cuál es su apellido?")
    //3- notificar al usuario - "Fué guardado en la base de datos con éxito"
    alert("Los datos fueron guardados con éxito.")
    alert("Los datos guardados son: \nNombre: " + nombre + "\nApellido: " + apellido)
    //4- ¿Desea continuar cargando usuarios?(Ingrese ESC para finalizar)
    rta = prompt("¿Desea usted continuar cargando usuarios?(Ingrese 'ESC' para finalizar)").toUpperCase()
}
alert("Salió del bucle, y continuó con el resto del código")
//FIN---------------------------------------------------------------------------------------

let rta = ""
let i = 0
//Repetimos con While hasta que el usuario ingresa "ESC"
/*  1- Limitar la carga de usuarios hasta una máximo de 3 personas
    2- En caso de que el usuario quiera cargar menos datos, tenga la posibilidad de finalizar el bucle*/

while ( i < 3 && rta != "ESC" ) {

    //1- Le pregunto el nombre
    let nombre = prompt("¿Cuál es su nombre?")

    //2- Le pregunto el apellido
    let apellido = prompt("¿Cuál es su apellido?")

    //3- notificar al usuario - "Fué guardado en la base de datos con éxito"

    alert("Los datos fueron guardados con éxito.")
    alert("Los datos guardados son: \nNombre: " + nombre + "\nApellido: " + apellido)

    //4- ¿Desea continuar cargando usuarios?(Ingrese ESC para finalizar)
    rta = prompt("¿Desea usted continuar cargando usuarios?(Ingrese 'ESC' para finalizar)").toUpperCase()

    i = i + 1
    //i++
    //i += 1
}
alert("Salió del bucle, y continuó con el resto del código")
//FIN----------------------------------------------------------------------------------

let rta = "ESC";

do {
    let nombre = prompt("Ingrese el nombre")
    let apellido = prompt("Ingrese el apellido")

    alert("Los datos fueron guardados con éxito!")
    alert("Usuario cargado: \nNombre: "+nombre+ "\nApellido: "+apellido)

    rta = prompt("¿Desea usted seguir cargando datos?(Ingrese 'ESC' para salir)").toUpperCase()

}
while (rta != "ESC")
alert("Este otro mensaje si.")
//FIN-------------------------------------------------------------------------------------

let opcion = 2;
//SWITCH
switch (opcion) {
case 1:
    console.log("La opción seleccionada es 1");
    break;
case 2:
    console.log("La opción seleccionada es 2");
    break;
case 3:
    console.log("La opción seleccionada es 3");
    break;
default:
    console.log("La opción seleccionada no es válida");
}
//FIN------------------------------------------------------------------------------------


//Simulador interactivo que me permite añadir productos, y calcular el precio total, con iva.
let resultado = 0
let ticket = "Detalle de la compra: \n"
let rta = ""

function iva(precio){
    return precio * 0.21
}

do{
    let producto = prompt("Ingrese el nombre del producto").toLowerCase()
    let precio = Number(prompt("Ingrese el valor del producto"))

    resultado = resultado + precio + iva(precio)
    ticket = ticket + "\n"+producto+"\t$"+ (precio + iva(precio))
    rta = prompt("¿Desea salir?(Escriba 'salir' para salir).").toLowerCase()

}while(rta != "salir")

if(resultado >= 10000){

    //descuento del 10%
    let resultadoConDescuento = resultado * 0.9
    alert(ticket

        +"\n\nTotal: $" + resultado

        +"\nTotal con descuento: $" + resultadoConDescuento)
}else{

    alert(ticket

                +"\n\nTotal: $" + resultado)

}
//FIN-------------------------------------------------------------------------------------

//Simulador interactivo que me permite añadir productos, y calcular el precio total, con iva.
let cuestionario = "Registro de cuestionario: \n"
let rta = ""
let i = 0
let acumuladorDeEdades = 0

function promedioEdad(cant_edades, edadSumaTotal){

    let resultado = edadSumaTotal/cant_edades
    alert(resultado)
}

do{

    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let edad = Number(prompt("Ingrese su edad"))
    cuestionario = cuestionario + "Nombre: "+ nombre + " Apellido: "+ apellido + "Edad: "+edad
    acumuladorDeEdades = acumuladorDeEdades + edad

    rta = prompt("¿Desea salir?(Escriba 'ESC' para salir)").toUpperCase()
    i = i + 1
}
while(rta != "ESC")
promedioEdad(i, acumuladorDeEdades)
//FIN---------------------------------------------------------------------------------------