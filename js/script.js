let inputMostrado = false; //Controla si existe un input en pantalla
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
    let entrada = document.querySelector("#entrada");
    let input = document.createElement("input");

    input.setAttribute("id", "input1");
    input.setAttribute("placeholder", "Escribe un número");

    entrada.appendChild(input);
}


//Crear el input 2 -> Mejorable.
function crearInput2() {
    let entrada = document.querySelector("#entrada");
    let input = document.createElement("input");

    input.setAttribute("id", "input2");
    input.setAttribute("placeholder", "Escribe un número");

    entrada.appendChild(input);
}


// Crear el boton.
function crearBoton() {
    let boton = document.createElement("button");

    boton.setAttribute("id", "calcular");
    boton.classList.add("boton");
    boton.textContent = "Calcular";
    
    entrada.appendChild(boton);
}


// Borrar botón.
function eliminarBoton() {
    document.querySelector(".boton").remove();
}


// Crear inputs.
function crearInputs(numeroInput) {
    if (inputMostrado) { //No hay ni input ni boton en pantalla.
        document.querySelector("#salida").innerHTML = "";
        document.querySelector("#input1").remove();

        if (document.querySelector("#input2")) {
            document.querySelector("#input2").remove();
        }
        eliminarBoton();
        inputMostrado = false;
    }

    if (!inputMostrado) {
        //Envía crear las entradas de input y botón.
        entrada.style.visibility = "visible"; //El div se comience a mostrar.
        crearInput1();
        if (numeroInput === 2) {
            crearInput2();
        }
        crearBoton();
        inputMostrado = true;
    }
}


// Crear todo.
function mostrarValorAbs() {
    crearInputs(1);
    
}
function mostrarEnteroSup() {

}


function mostrarExponente() {
    crearInputs(2);
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