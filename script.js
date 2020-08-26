/*
TO DO
- Recoger los datos con get Element y almacenarlos en variables :)
- Hacer una función que valide todos al mismo tiempo.
- Hacer las operaciones de cada validación por separado.
- Llamar las funciones dentro de la función de validación.
*/

//Almacenar los valores en variables

var rut = document.getElementById("rut");
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var edad = document.getElementById("edad");
var correo = document.getElementById("correo");
var fecha = document.getElementById("fecha");

//Función de validación

function validar () {
    rut = rut.value;
    valRut(rut);
    nombres = nombres.value;
    valNombres();
    apellidos = apellidos.value;
    // valApellidos();
    edad = edad.value;
    // valEdad();
    correo = correo.value;
    // valCorreo();
    fecha = fecha.value;
    // valFecha();

    console.log(rut, nombres, apellidos, edad, correo, fecha);
};

//VALIDACIONES

function valRut (v) {
    if (v == null || v.length == 0 || /\D/.test(v)) { //agregar puntos y guiones a la validación
        alert("Debes ingresar un RUT válido");
    };
};

function valNombres (v) {
    if (v == null || v.length == 0 || / /.test(v)) {
        
    }
};

/* 
Crear el campo de especialidad con lista desplegable
Crear el campo de hora con horas desplegables

- Validar rut (formato) 
- Validar nombres (sólo letras)
- Validar apellidos (sólo letras)
- Validar edad (que sólo tenga números)
- Validar mail (formato)
- Validar fecha (validar que sean números y en formato dd-mm-aaaa)

El botón reservar validará los datos ingresados y deberá desplegar:
Estimado(a) [nombre y apellido del paciente], su hora para [especialidad] ha sido reservada para el día [fecha] a las [hora]. Además, se le envió un mensaje a su corre [email] con el detalle de su cita. 
Gracias por preferirnos. 
(todo centrado en un div que se sitúe dentro del html).

Si alguno de los datos no son válidos
*/