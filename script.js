"use strict";
/*
const container = document.querySelector("#container");

// creating a <p> with red text
const contentp1El = document.createElement("p");
// contentp1El.classList.add("contentp1EL"); - unnecessary
contentp1El.textContent = "Hey I'm red!";
contentp1El.style.color = "red";
container.appendChild(contentp1El);

const contenth3El = document.createElement("h3");
// contenth3El.classList.add("contenth3El"); - unnecessary
contenth3El.textContent = "I'm a blue h3!";
contenth3El.style.color = "blue";
container.appendChild(contenth3El);

const div = document.createElement("div");
div.style.cssText = "background: pink; border: black";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);

const alertFunction = function () {
  alert("YAY! YOU DID IT!");
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction);
btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.background = "blue";
});

*/

// Attaching listeners to groups of nodes
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
