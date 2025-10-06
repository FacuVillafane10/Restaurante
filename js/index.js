let comida;
let bebida;
let postre;
let precioComida = 0;
let precioBebida = 0;
let precioPostre = 0;
let precioFinal = 0;
let mensajeFinal;


let realizarPedido = () => {
  comida = parseInt( prompt("¿Que comida desea elegir? Recuerde que debe ingresar el número elegido."));
  bebida = parseInt( prompt("¿Que bebida desea elegir? Recuerde que debe ingresar el número elegido." ));
  postre = parseInt( prompt("¿Que postre desea elegir? Recuerde que debe ingresar el número elegido."));



switch (comida) {
  case 1:
    precioComida = 10500
    break;
  case 2:
    precioComida = 9800
    break;
  case 3:
    precioComida = 7800
    break;
  case 4:
    precioComida = 15200
    break;
  case 5:
    precioComida = 6200
    break;
  case 6:
    precioComida = 5500
    break;

  default:
    alert("No contamos con esa opción de Comida por el momento, le pedimos disculpas.")
    break;
}

switch (bebida) {
  case 1:
    precioBebida = 1800
    break;
  case 2:
    precioBebida = 4500
    break;
  case 3:
    precioBebida = 5500
    break;
  case 4:
    precioBebida = 5200
    break;
  case 5:
    precioBebida = 1200
    break;
  case 6:

  default:
    alert("No contamos con esa opción de Bebida por el momento, le pedimos disculpas.")
    break;
}

switch (postre) {
  case 1:
    precioPostre = 2200
    break;
  case 2:
    precioPostre = 2300
    break;
  case 3:
    precioPostre = 3500
    break;
  case 4:
    precioPostre = 3800
    break;
  case 5:
    precioPostre = 1800
    break;

  default:
    alert("No contamos con esa opción de Postre por el momento, le pedimos disculpas.")
    break;
}

precioFinal = precioBebida + precioPostre + precioComida
if (comida > 0 && comida <= 6 && bebida > 0 && bebida <= 5 && postre > 0 && postre <= 5){
     mensajeFinal =  alert(`¡¡Muchas Gracias por su Compra!! Su pedido en total es de $${precioFinal} `)
}
    else
        {
      mensajeFinal =  alert("El pedido ingresado no fué correcto.")
    }

  return console.log(mensajeFinal);
};