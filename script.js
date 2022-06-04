"use strict";

const data = [];
const submitBtn = document.querySelector("#btn-submit");
const nombrePersonaEl = document.querySelector("#nombre-persona");
const gastosPersonaEl = document.querySelector("#gastos-persona");
const formEl = document.querySelector("form");
const personaAgregada = document.querySelector(".persona-agregada");
const gastosTotalesEl = document.querySelector('#section--gastos-totales')

const nombrePersonaArr = new Array();
const gastoPersonaArr = new Array();




// Cuando carga la pagina
nombrePersonaEl.focus();

//-------------------------------------------------- Eventos --------------------------------------------------

// Clickeando enviar
submitBtn.addEventListener("click", e => {
	e.preventDefault();

	// Agregando persona y cantidad de gastos
	nombrePersonaArr.push(nombrePersonaEl.value);
	gastoPersonaArr.push(gastosPersonaEl.value);

	// Agregando HTML con la persona
	personaAgregada.textContent = `Los gastos de ${nombrePersonaEl.value} por $${gastosPersonaEl.value} fueron agregados correctamente.`;
    
	// Agregando a gastos totales
    gastosTotalesEl.after(`${nombrePersonaEl.value}: ${gastosPersonaEl.value}`)
    
	// Cleareando el form y reseteando focus
	formEl.reset();
	nombrePersonaEl.focus();

});
