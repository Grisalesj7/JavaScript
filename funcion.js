function convertir(){

    const Valor_dolar = 3652;

    let dolares = parseFloat(document.getElementById("dolares").value);
    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(dolares) || dolares <= 0){
        resultadoDiv.innerHTML = "Por favor ingrese una cantidad valida."
        return
    }

    let pesos = dolares * Valor_dolar;

    resultadoDiv.innerHTML = dolares + " USD equivalen a " + pesos + "COP";
}