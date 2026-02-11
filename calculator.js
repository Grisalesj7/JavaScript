// Función para mostrar el resultado en ambos elementos
const mostrarResultado = (valor) => {
    document.getElementById("resultado").value = valor;
    document.getElementById("display-resultado").innerText = "Resultado en DIV: " + valor;
};

// Basicamente aqui tenemos lo que son las funciones con (function)
function sumar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    mostrarResultado(n1 + n2);
}

function restar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    mostrarResultado(n1 - n2);
}

// Funciones de flecha con arrow
const multiplicar = () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    mostrarResultado(n1 * n2);
};

const dividir = () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    
    if (n2 === 0) {
        mostrarResultado("Error: Div entre 0");
    } else {
        mostrarResultado(n1 / n2);
    }
};

const modulo = () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    mostrarResultado(n1 % n2);
};