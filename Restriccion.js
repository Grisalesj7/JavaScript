let positivos = 0;
let negativos = 0;
let sumaPositivos = 0;
let maximo = null;
let minimo = null;
let terminado = false;

function agregarNumero(){
    if (terminado) {
        alert("El programa ya finalizo. Recarga la pagina para comenzar de nuevo.")
        return;
    }

    let numero = parseFloat(document.getElementById("numero").value);

    if (isNaN(numero)){
        alert("Ingrese un numero valido.");
        return;
    }

    if (numero === 99) {
        terminado = true;
        alert("Ingreso finalizado. Ahora presione 'Mostrar Resultados'.");
        return;
    }

    if (numero > 0) {
        positivos++;
        sumaPositivos += numero;
    }else if(numero < 0){
        negativos++;
    }

    if (maximo === null || numero < minimo){
        minimo = numero;
    }

    document.getElementById("numero").value = "";
}

function mostrarResultado(){
    let promedio = positivos > 0 ? (sumaPositivos / positivos) : 0;

    document.getElementById("resultado").innerHTML = ` 
    <p>Cantidad de positivos: ${positivos}</p>
    <p>Cantidad de negativos: ${negativos}</p>
    <p>Suma de Positivos: ${sumaPositivos}</p>
    <p>Promedio de positivos: ${promedio}</p>
    <p>Valor maximo: ${maximo}</p>
    <p>Valor minimo: ${minimo}</p>
    `;
}