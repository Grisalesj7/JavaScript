//Un objeto es una estructura que permite almacenar informacion en forma de propiedades 
//y metodos 

//Ejemplo:

function MostrarResultado(){

    let estudiantes = [
        {nombre: "Juan", edad: 20, carrera: "Ingenieria"},
        {nombre: "Ana", edad: 22, carrera: "Medicina"},
        {nombre: "Carlos", edad: 19, carrera: "Derecho"}
    ];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    estudiantes.forEach(function(estudiante){
        resultado.innerHTML +=
        "Nombre: " + estudiante.nombre + "<br>" +
        "Edad: " + estudiante.edad + "<br>" +
        "Carrera: " + estudiante.carrera + "<br><br>";
    });
}
