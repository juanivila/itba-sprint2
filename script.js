"use strict";

const submitBtnEl = document.querySelector("#btn-submit");
const nombrePersonaEl = document.querySelector("#nombre-persona");
const gastosPersonaEl = document.querySelector("#gastos-persona");
const formEl = document.querySelector("form");
const personaAgregadaEl = document.querySelector(".persona-agregada");
const gastosTotalesEl = document.querySelector("#section--gastos-totales");
const nombrePersonaArr = new Array();
const gastosTotalesNum = document.querySelector("#gastos-totales");
const gastosCadaUno = document.querySelector("#cada-uno-pago");

let gastoPersonaCounter = 0;
let cantidadPersonasCounter = 0;

// Cuando carga la pagina
nombrePersonaEl.focus();

//-------------------------------------------------- Eventos --------------------------------------------------

// Clickeando enviar
submitBtnEl.addEventListener("click", e => {
	e.preventDefault();

	if (!nombrePersonaEl.value === "" || !gastosPersonaEl.value == "") {
		// Agregando persona y cantidad de gastos
		nombrePersonaArr.push(nombrePersonaEl.value);
		gastoPersonaCounter += Number(gastosPersonaEl.value);
		cantidadPersonasCounter += 1;

		// Modificando numero gastos totales
		gastosTotalesNum.textContent = `$${gastoPersonaCounter}`;
		gastosCadaUno.textContent = `$${gastoPersonaCounter/cantidadPersonasCounter}`;
		// Modificando mensaje persona agregada
		personaAgregadaEl.textContent = `Los gastos de ${nombrePersonaEl.value} por $${gastosPersonaEl.value} fueron agregados correctamente.`;

		// Creando y agregando elemento en el HTML
		const pagoEl = document.createElement("p");
		pagoEl.innerHTML = `<p>${nombrePersonaEl.value}: ${gastosPersonaEl.value}</p>`;
		pagoEl.classList.add("bg-danger");
		pagoEl.classList.add("text-light");
		pagoEl.classList.add("py-1");
		pagoEl.classList.add("fs-2");
		gastosTotalesEl.append(pagoEl);

		// Cleareando el form y reseteando focus
		formEl.reset();
		nombrePersonaEl.focus();
	} else {
		alert("Por favor ingrese algún valor");
	}
});
