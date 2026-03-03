let usuarios = [];

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono =  document.querySelector("#telefono");
const password = document.querySelector("#password");
const btnRegistrar = document.querySelector("#btnRegistrar");
const listaUsuarios = document.querySelector("#listaUsuarios");
const mensajeExito = document.querySelector("#mensajeExito");


const regexNombre = /^[A-Za-z\s]+$/;
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^\d{10}$/;
const regexPassword = /^(?=.*\d).{8,}$/;


let validaciones = {
    nombre : false,
    correo : false,
    telefono : false,
    password : false
};

function verificarFormulario(){
    const todoValido = Object.values(validaciones).every(valor => valor === true);
    btnRegistrar.disabled = !todoValido;
}

function validarCampo(input, regex, errorElemento, mensaje, campo){
    if(!regex.test(input.value)){
        errorElemento.textContent = "mensaje";
        input.classList.add("Invalido");
        input.classList.remove("valido");
        validaciones[campo] = false;
    }else{
        errorElemento.textContent = "";
        input.classList.remove("invalido");
        input.classList.add("valido");
        validaciones[campo] = true;
    }

    verificarFormulario();
}

nombre.addEventListener("input", () => {
    validarCampo(nombre, regexNombre,
        document.querySelector("#errorNombre"),
        "Solo letras y espacios",
        "nombre"
    );
});

correo.addEventListener("input", () => {
    validarCampo(correo, regexCorreo,
        document.querySelector("#errorCorreo"),
        "Correo invalido",
        "correo"
    );
});

telefono.addEventListener("input", () => {
    validarCampo(telefono, regexTelefono,
        document.querySelector("#errorTelefono"),
        "Debe tener 10 digitos",
        "telefono"
    );
});

password.addEventListener("input", () => {
    validarCampo(password, regexPassword,
        document.querySelector("#errorPassword"),
        "Minimo 8 caracteres y un numero",
        "password"
    );
});

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nuevoUsuario = {
        nombre: nombre.value,
        correo: correo.value,
        telefono: telefono.value
    };

    usuarios.push(nuevoUsuario);

    const li = document.createElement("li");
    li.textContent = `${nuevoUsuario.nombre} - ${nuevoUsuario.correo} - ${nuevoUsuario.telefono}`;
    listaUsuarios.appendChild(li);

    mensajeExito.textContent = `Usuario ${nuevoUsuario.nombre} registrado correctamente 👌`;
    
    formulario.reset();
    btnRegistrar.disabled  = true;

    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("valido");
    });

    validaciones = {
        nombre : false,
        correo : false,
        telefono : false,
        password : false
    };

});
