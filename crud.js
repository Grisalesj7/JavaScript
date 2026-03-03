document.getElementById("btnEnviar").addEventListener("click", function(){

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    let mensajeDiv = document.getElementById("mensaje");
    let resultadoDiv = document.getElementById("resultado");

    mensajeDiv.textContent = "";
    resultadoDiv.textContent = "";

    if(nombre === "" || edad === ""){
        let mensajeError = document.createElement("div");
        mensajeError.textContent = "Todos los campos son obligatorios";
        mensajeError.classList.add("error");
        mensajeDiv.appendChild(mensajeError);
        return;
    }

    if(edad <= 0){
        let mensajeError = document.createElement("div");
        mensajeError.textContent = "La edad debe ser mayor que cero";
        mensajeError.classList.add("error");
        mensajeDiv.appendChild(mensajeError);
        return;
    }

    let mensajeCorrecto = document.createElement("div");
    mensajeCorrecto.textContent = "Registro exitoso";
    mensajeCorrecto.classList.add("correcto");
    mensajeDiv.appendChild(mensajeCorrecto);

    let resultado = document.getElementById("p");
    resultado.textContent = `Bienvenido ${nombre}, tienes ${edad} años.`;
    resultado.classList.add("info");
    resultadoDiv.appendChild(resultado);

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";

});