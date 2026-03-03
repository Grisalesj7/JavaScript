function validarCorreo(){
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje");
 
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (expresion.test(correo)) {
        mensaje.textContent = "👌 Correo valido";
        console.log("👌 Correo valido")
    }else{
        mensaje.textContent = "😭 Correo invalido";
        console.log("😭 Correo invalido")
    }
}