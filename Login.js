const usuariosValidos = [
    {user: "admin123", pass: "clave123"},
    {user: "estudiante2026", pass: "segura456"}
    // Creamos constantes para definir los usuarios que pueden acceder a este login
];

function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const errorMsg = document.getElementById("error");
    // Creamos validaciones y llamamos sus id's

    const userRegex = /^[a-zA-Z0-9]+$/;

    // Usamos una expresion regular tanto para el usuario como para la contraseña

    if(!userRegex.test(user) || pass.length < 6) {
        errorMsg.innerText = "Formato de usuario o contraseña ivalido"
        return;
    }

    const autenticado = usuariosValidos.find(u => u.user === user && u.pass === pass);

    // En esta linea de codigo me encontrara el arreglo por medio del find

    if (autenticado) {
        window.location.href = "LocalStorage.html";
        // Por ultimo le ponemos la ruta la cual se va a ejecutar cuando le demos ingresar
    }else{
        errorMsg.innerText = "Credenciales incorrectas"
    }
}