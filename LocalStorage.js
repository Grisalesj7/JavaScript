let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
//Basicamente lo  que haremos es buscar en el navegador si ya hay datos guardados
//El json.parse convierte el texto en un objeto o un arreglo de js
// Si no hay datos guardados, entonces crea un arreglo vacio 
mostrarEstudiantes();

function calcularEdad(fecha){
    //Creamos la funcion de calcular la edad 
    const hoy = new Date();
    //El new date se encarga de poner la fecha actual 
    const cumple = new Date(fecha);
    // Aqui le pedimos que convierta la fecha de nacimiento en un objeto (date)
    let edad = hoy.getFullYear() - cumple.getFullYear();
    //En este caso lo que haremos aqui es que nos va a calcular la edad con la fecha de hoy
    //Es decir por ejemplo si seleccionamos 2005 me va a calcular la edad hasta 2026

    const m = hoy.getMonth() - cumple.getMonth();
    //Aca verifica si ya cumplio años el estudiante 

    if(m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())){
        edad--;
    }
    //Aca profe basicamente lo que hacemos es que le ponemos la condicional 
    //De que si aun no ha cumplido años se restaria 1

    return edad;
    //Aca devuelve la edad calculada
}

function guardarEstudiante(){
//Creamos la funcion guardar
    let id = document.querySelector("#id").value;
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let fechaNacimiento = document.querySelector("#fechaNacimiento").value;
    let whatsapp = document.querySelector("#whatsapp").value;
    let observaciones = document.querySelector("#observaciones").value;
// Creamos la variables y llamamos los id's para validarlos
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexWhatsapp = /^\d{10}$/;
    // Aca creamos las expresiones regulares, las cuales nos serviran para validar estos campos

    if(!nombre || !regexCorreo.test(correo) || !fechaNacimiento || !regexWhatsapp.test(whatsapp)){
        alert("Verifique los campos");
        return;
        // Profe aca nos encargamos de mirar que el nombre no este vacio
        // Que el correo si sea valido, que la fecha si exista
        // Y que en este caso la expresion regular del whatssap si se cumpla como tal
    }

    let correoExiste = estudiantes.some(e => e.correo === correo && e.id != id);
    // Aca se encarga de verificar que una funcion se cumpla, en caso de que si me devolvera un true
    // Esta linea de codigo se hace mas que todo para evitar correos duplicados
    if(correoExiste){
        alert("Este correo ya está registrado");
        return;
        // Aca nos retornaria el mensaje en caso tal de que se cumpla la funcion del some
    }

    let estudiante = {
        // Creamos el objeto estudiante
        id: id === "" ? (estudiantes.length > 0 ? estudiantes[estudiantes.length-1].id + 1 : 1) : parseInt(id),
        nombre,
        correo,
        fechaNacimiento,
        whatsapp,
        observaciones,
        edad: calcularEdad(fechaNacimiento)
        //Le pedimos que nos guarde todos los datos que metimos en el objeto
    };

    if(id === ""){
        estudiantes.push(estudiante);
        // En esta linea de codigo se encarga de agregar la informacion al arreglo
    }else{
        let index = estudiantes.findIndex(e => e.id == id);
        // Tenemos el findIndex que en este caso buscara la posicion del estudiante
        // Que este mismo sera reemplazado
        estudiantes[index] = estudiante;
    }

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    // En esta linea profe convierte el arreglo a texto para poder guardarlo

    limpiarFormulario();
    mostrarEstudiantes();
}

function mostrarEstudiantes(){

    let tabla = document.querySelector("#tablaEstudiantes");
    tabla.innerHTML = "";
    // Creamos variable y validamos id. Por ultimo llamamos la tabla definida
    // En el html por medio del inner

    estudiantes.forEach(estudiante => {

        // Llamamos estudiantes y usamos un forEach que este se encarga de iterar 
        // Cada campo validado

        tabla.innerHTML += `
        <tr>
        <td>${estudiante.id}</td>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.correo}</td>
        <td>${estudiante.fechaNacimiento}</td>
        <td>${estudiante.edad}</td>
        <td>${estudiante.whatsapp}</td>
        <td>${estudiante.observaciones}</td>
        <td>
        <button onclick="editarEstudiante(${estudiante.id})">Editar</button>
        <button onclick="eliminarEstudiante(${estudiante.id})">Eliminar</button>
        </td>
        </tr>
        `;
    });
}

function editarEstudiante(id){

    let estudiante = estudiantes.find(e => e.id == id);
    // Creamos una variable y usamos el find, que en este caso es el que nos encontrara
    // El arreglo ya definido

    document.querySelector("#id").value = estudiante.id;
    document.querySelector("#nombre").value = estudiante.nombre;
    document.querySelector("#correo").value = estudiante.correo;
    document.querySelector("#fechaNacimiento").value = estudiante.fechaNacimiento;
    document.querySelector("#whatsapp").value = estudiante.whatsapp;
    document.querySelector("#observaciones").value = estudiante.observaciones;
}

function eliminarEstudiante(id){
// Esta linea de codigo filtra el arreglo
    estudiantes = estudiantes.filter(e => e.id != id);
    // Profe el filter elimina el estudiante, y luego lo carga por medio del localStorage 
    // Que en este caso el local tiene un set, ahi le estaria asignando dicha funcion

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    mostrarEstudiantes();
}

function limpiarFormulario(){
// Por ultimo este nos borra todos los campos
// Logicamente validamos cada campo que nos tiene que borrar
    document.querySelector("#id").value = "";
    document.querySelector("#nombre").value = "";
    document.querySelector("#correo").value = "";
    document.querySelector("#fechaNacimiento").value = "";
    document.querySelector("#whatsapp").value = "";
    document.querySelector("#observaciones").value = "";
}