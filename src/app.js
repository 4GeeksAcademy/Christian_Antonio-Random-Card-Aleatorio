/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();
};
/*** AQUI DEFINO LAS CONSTANTES SOBRE LAS QUE VOY A ITERAR
 * @symbols en esta variable meto los palos de una baraja de poker usando un array
 * @values aqui dejo todos los numeros de las cartas de una baraja cambiando el 1 por una A y añadiendo la J,Q y K
 * @symbolTop aqui dejo el palo que esta arriba a la izquierda de la baraja
 * @symbolBottom en esta dejo el palo de abajo derecha de la baraja
 * @cardNumber aqui esta el numero en el centro de la carta
 */
const symbols = ["hearts", "diamonds", "clubs", "spades"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const symbolTop = document.getElementById("symbolUp");
const symbolBottom = document.getElementById("symbolDown");
const cardNumber = document.getElementById("cardNumber");

//Empezamos con una funcion que escoja una carta aleatoria
function chooseCard(arr1, arr2) {
  //Aqui creamos un nuevo array vacio
  let card = [];

  /*** Aqui estamos metiendo 2 elementos de 2 arrays porque tenemos 2 arrays distintos: los palos y el numero del centro
 * arr1[Math.floor(Math.random() * arr1.length)] : aqui estamos multiplicando un numero random por el numero de elementos que haya dentro del array,
                                                   como podemos ver al estar dentro de los corchetes estamos iterando dentro de la posición de los 
                                                   elementos para que escoger un numero    
 */
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  // Aqui buscamos que nos devuelva el valor sobre el que estamos iterando
  return card;
}
// En esta función elegimos los colores
function asignColor(arr) {
  //Utilizamos un if para que si coinciden con dicho elemento(ej: diamante) sea de dicho color(rojo) y viceversa
  if (arr[0] === "hearts" || arr[0] === "diamonds") {
    symbolTop.style.color = "red";
    symbolBottom.style.color = "red";
    cardNumber.style.color = "red";
    //Aqui utilizamos el else dado que todo lo que no sean corazones y diamantes es negro asi que no hace falta utilizar comparativos
  } else {
    symbolTop.style.color = "black";
    symbolBottom.style.color = "black";
    cardNumber.style.color = "black";
  }
}
//En esta función asignamos un palo de la baraja que sacaremos del array de arriba
function asignSymbol(arr) {
  //si el elemento del arr[0] es igual a uno de dicho palo, se le cambia el simbolo con el .innerHTML
  if (arr[0] === "hearts") {
    symbolTop.innerHTML = "♥";
    symbolBottom.innerHTML = "♥";
  } else if (arr[0] === "diamonds") {
    symbolTop.innerHTML = "♦";
    symbolBottom.innerHTML = "♦";
  } else if (arr[0] === "clubs") {
    symbolTop.innerHTML = "♣";
    symbolBottom.innerHTML = "♣";
  } else if (arr[0] === "spades") {
    symbolTop.innerHTML = "♠";
    symbolBottom.innerHTML = "♠";
  }
}
//En esta función vamos a asignar el valor del numero del centro
function asignValue(arr) {
  //CUIDADO, utilizamos el array en posicion 1 (arr[1]) porque arriba estamos utilizando el arr[0] con los palos
  cardNumber.innerHTML = arr[1];
}
//En esta función vamos a generar la carta aleatoria utilizando las otras funciones
function generateCard() {
  //Le asignamos a esta variable card la funcion de elegir carta con los arrays de los palos y los numeros
  let card = chooseCard(symbols, values);
  //Aqui llamamos a las otras funciones para que iteren sobre la variable card para que todo se complemente
  asignColor(card);
  asignSymbol(card);
  asignValue(card);
}
//Aqui estamos creando un evento en el boton para que cuando se haga click en el boton se realize la funcion de generar una carta aleatoria
document.querySelector("#buttonRandom").addEventListener("click", generateCard);
