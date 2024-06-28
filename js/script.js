let inputMostrado = false; //Controla si existe un input en pantalla
salida = document.querySelector("#salida");
document.querySelector("#salida").innerHTML = "";

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
        salida.innerHTML = "";
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


// Vlidar numero
function validar(numero) { //Si no es un numero (is not a number), isNaN(numero) devuelve true si se cumple que no es numérico.
    if (isNaN(numero)) {
        salida.textContent = "La operación no se puede realizar."
        return false;
    } else {
        return true;
    }
}


// Crear todo.
// 1. Devolvemos el valor abosluto de un número.
function mostrarValorAbs() {
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click", () =>{
        // 1. Leer lo que contiene el input.
        let numero=document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent="El valor absoluto de " + numero + " es -> " + Math.abs(numero);
        }
    })
}

// 2. Devolvemos el valor al que más se acerca un número.
function mostrarEnteroSup() {
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click", () =>{
        // 1. Leer lo que contiene el input.
        let numero=document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent="El valor entero de " + numero + " es -> " + Math.ceil(numero);
        }
    })
}

// 3. Devolvemos el valor exponenciado de un número.
function mostrarExponente() {
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click", () =>{
        // 1. Leer lo que contiene el input.
        let base=document.querySelector("#input1").value;
        let exp=document.querySelector("#input2").value;
        
        if (validar(base)&&validar(exp)) {
            salida.innerHTML="El valor entero de " + base+"<sup>"+exp+"</sup>" + " es = " + Math.pow(base,exp);
        }
    })
}

// 4. Devolvemos el valor más grande de dos números.
function mostrarMax() {
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click", () =>{
        // 1. Leer lo que contiene el input.
        let num1=document.querySelector("#input1").value;
        let num2=document.querySelector("#input2").value;
        
        if (validar(num1)&&validar(num2)) {
            salida.textContent="El número más grande entre " + num1+" y "+num2+ " es -> " + Math.max(num1,num2);
        }
    })
}

// 5. Devolvemos el valor más pequeño de dos números.
function mostrarMin() {
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click", () =>{
        // 1. Leer lo que contiene el input.
        let num1=document.querySelector("#input1").value;
        let num2=document.querySelector("#input2").value;
        
        if (validar(num1)&&validar(num2)) {
            salida.textContent="El número más pequeño entre " + num1+" y "+num2+ " es -> " + Math.min(num1,num2);
        }
    })
}

// 6. Devolvemos la parte redondeada de un número.
function mostrarRedondeo() {
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click", () =>{
        // 1. Leer lo que contiene el input.
        let numero=document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent="El valor " + numero + " redondeado es -> " + Math.round(numero);
        }
    })
}

// 7. Devolvemos la raíz cuadrada de un numero.
function mostrarRaizC() {
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click", () =>{
        // 1. Leer lo que contiene el input.
        let numero=document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent="La raiz cuadrada de " + numero + " es -> " + Math.sqrt(numero);
        }
    })
}

// 8. Devolvemos la parte entera de un numero.
function mostrarTruncar() {
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click", () =>{
        // 1. Leer lo que contiene el input.
        let numero=document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent="La parte entera de " + numero + "  es -> " + Math.trunc(numero);
        }
    })
}