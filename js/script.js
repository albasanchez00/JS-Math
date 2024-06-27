let inputMostrado = true;
salida = document.querySelector("#salida");

window.onload = () => {
    document.querySelector("#valorAbs").addEventListener("click", mostrarValorAbs);
    document.querySelector("#enteroSup").addEventListener("click", mostrarEnteroSup);
    document.querySelector("#exponente").addEventListener("click", mostrarExponente);
    document.querySelector("#max").addEventListener("click", mostrarMax);
    document.querySelector("#min").addEventListener("click", mostrarMin);
    document.querySelector("#redondeo").addEventListener("click", mostrarRedondeo);
    document.querySelector("#raizC").addEventListener("click", mostrarRaizC);
    document.querySelector("#truncar").addEventListener("click", mostrarTruncar);
}


// Crear l input 1.
function crearInput1() {
    let entrada=document.querySelector("#entrada");
    let input=document.createElement("input");

    input.setAttribute("id","input1");
    input.setAttribute("placeholder","Escribe un número");
    
    entrada.appendChild(input);
}

//Crear el input 2 -> Mejorable.
function crarInput2() {
    let entrada=document.querySelector("#entrada");
    let input=document.childElement("input");

    input.setAttribute("id","input2");
    input.setAttribute("placeholder","Escribe un número");
    
    entrada.appendChild(input);
}


// Crear el boton.
function crearBoton() {
    let boton=document.createElement("button");
    boton.setAttribute("id", "calcular");
    boton.classList.add("boton");
    boton.textContent="Calcular";
    entrada.appendChild(boton);
}

// Borrar botón.
function eliminarBoton() {
    document.querySelector(".boton").remove();

}


// Crear todo.
function mostrarValorAbs() {
    crearInput1();
    crearBoton();
}
function mostrarEnteroSup() {
    
}


function mostrarExponente() {
    
}


function mostrarMax() {
    
}


function mostrarMin() {
    
}


function mostrarRedondeo() {
    
}


function mostrarRaizC() {
    
}


function mostrarTruncar() {
    
}