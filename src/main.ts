import "./style.css";

var amigos = 6;
var cuenta = 120;
var bebidas = 18;
var resultado;

//Invitamos a la bebida nosotros, con lo cual debemos restar al total de la cuenta los 18€ de las bebidas
resultado = (cuenta - bebidas) / amigos;
console.log("Cada comensal debe pagar " + resultado + "€");

// interface Interfaz {
//   calle: String;
//   CP: number;
// }

const direccion = {
  calle: "Alagon",
  CP: "1234",
};
let numero = 200;

console.log(`direccion`);
