/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const who = [
    "El hamster del servidor ",
    "El becario con miedo a los teclados ",
    "El programador en modo zombie ",
    "El pato de goma consultor ",
    "El algoritmo rebelde de inteligencia artificial "
  ];

  const action = [
    "hackeó sin querer ",
    "invirtió todos los bytes de ",
    "declaró la guerra a ",
    "se fue de vacaciones con ",
    "tradujo a klingon "
  ];

  const what = [
    "la página de login ",
    "todos los comentarios en el código ",
    "la base de datos de memes ",
    "el framework experimental ",
    "los test unitarios fallidos "
  ];

  const when = [
    "en plena madrugada ",
    "justo antes del deploy ",
    "durante la demo con el CEO ",
    "en pleno eclipse lunar ",
    "cuando la cafetera explotó "
  ];

  let a = Math.floor(Math.random() * who.length);
  let b = Math.floor(Math.random() * action.length);
  let c = Math.floor(Math.random() * what.length);
  let d = Math.floor(Math.random() * when.length);
  document.getElementById("excuse").innerHTML =
    who[a] + action[b] + what[c] + when[d];
};
