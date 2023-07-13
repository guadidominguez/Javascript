//Simulador interactivo de carrito de compras de sitio e-commerce, zapatillas.


//Ingrese usuario
let nombre = prompt ("Ingrese nombre de usuario")
//Ingrese contraseña
let contraseña = prompt ("Ingrese contraseña")
//Notificar al usuario fue guardado
alert ("Los datos fueron guardados con éxito!")
alert ("Hola " + nombre + " ! Ya podés elegir tus zapas!")

console.log (nombre)
console.log (contraseña)
console.log ("Los datos fueron guardados con éxito!")
console.log ("Hola " + nombre + " ! Ya podés elegir tus zapas!")

let rta = "SALIR";
let total = 0;
let ticket = "Detalle de su compra: \n"

function iva (precio){
    return precio *0.21
}

do{
    let articulo = prompt ("Ingrese modelo de zapatilla")
    let precio = Number (prompt("Ingrese el valor del producto"))
    let cantidad = Number (prompt ("Ingrese la cantidad de productos"))

    total= total + ((precio)* cantidad)
    totalmasiva= (total + iva(precio))
    ticket = ticket + "\n" + "El modelo que elegiste: " + articulo + "\n" + "Unidades: " + cantidad + "\n" +"Total= $ " + total + "\n" + "Total + IVA (21%)= $ " + totalmasiva

    if (total >= 60000){
        //descuento de 15%
        let descuento = totalmasiva * 0.85
        alert ("Con una compra mayor a $60000 tienes un 15% de descuento !")
        alert (ticket + "\n" + "Total con descuento: $" + descuento)

        console.log ("Con una compra mayor a $60000 tienes un 15% de descuento !")
        console.log (ticket + "\n" + "Total con descuento: $" + descuento)

    }
    else{
        alert (ticket)
        console.log (ticket)
    }
    rta = prompt ("¿Desea usted seguir comprando? (Ingrese 'SALIR' para finalizar compra)").toUpperCase()
}while (rta != "SALIR")

