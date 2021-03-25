/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

// let uListaDominios = document.querySelector(".lista-dominios");
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let final = [".us", ".com"];
let dominios = [];
let unoXuno = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < final.length; l++) {
        dominios.push(`${pronoun[i]}${adj[j]}${noun[k]}${final[l]}`);
      }
    }
  }
}

let listaConLi = [];

window.onload = function() {
  //write your code here
  dominios.forEach(dominio => console.log(dominio));
  listaConLi = dominios.map(dominio => `<li class="p-3">${dominio}</li>`);
  unoXuno += listaConLi.join(" ");
  document.querySelector("#lista-dominios").innerHTML = unoXuno;
};
