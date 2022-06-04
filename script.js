"use strict";

const data = [];
const submitBtn = document.querySelector("#btn-submit");
const nombrePersonaEl = document.querySelector("#nombre-persona");
const gastosPersonaEl = document.querySelector("#gastos-persona");

const nombrePersonaArr = new Array();
const gastoPersonaArr = new Array();
const formEl = document.querySelector("form");

// Cuando carga la pagina
nombrePersonaEl.focus();

//-------------------------------------------------- Eventos --------------------------------------------------

// Click enviar
submitBtn.addEventListener("click", e => {
	e.preventDefault();

	// Agregando persona y cantidad de gastos
	nombrePersonaArr.push(nombrePersonaEl.value);
	gastoPersonaArr.push(gastosPersonaEl.value);

	// Cleareando el form y reseteando focus
	formEl.reset();
	nombrePersonaEl.focus();
});
