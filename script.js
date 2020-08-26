/*
TO DO
- Recoger los datos con get Element y almacenarlos en variables :)
- Hacer una función que valide todos al mismo tiempo :)
- Hacer las operaciones de cada validación por separado. :)
- Llamar las funciones dentro de la función de validación :)
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
    valNombres(nombres);
    apellidos = apellidos.value;
    valNombres(apellidos);
    edad = edad.value;
    valEdad(edad);
    correo = correo.value;
    valCorreo(correo);
    fecha = fecha.value;
    valFecha(fecha);

    console.log(rut, nombres, apellidos, edad, correo, fecha);
};

//VALIDACIONES

function valRut (v) {
    if (v.length > 0 && /[0-9]{1,2}[.]{1}[0-9]{3}[.]{1}[0-9]{3}[-]{1}[0-9kK]{1}/.test(v)) {
        console.log(true);
    }

    else {
        alert("Debes ingresar un RUT válido");        
    }
};

function valNombres (v) {
    if (v.length > 0 && /[a-z]\s[a-z]/gim.test(v)) {
        console.log(true);
    }
    
    else {
        alert("Debes ingresar nombres válido");     
    }
};

function valEdad (v) {
    if (v.length > 0 && /[\d]/.test(v)) {
        console.log(true);
    }
    
    else {
        alert("Debes ingresar tu edad");     
    }
};

function valCorreo (v) {
    if (v.length > 0 && /[a-z0-9_-]{1,}[@]{1}[a-z0-9_-]{1,15}[.]{1}[a-z]{2}/i.test(v)) {
        console.log(true);
    }
    
    else {
        alert("Debes ingresar tu correo con @ y punto, ej. hola@micorreo.ok");     
    }
};

function valFecha (v) {
    if (v.length > 0 && /[0-9]{2}[-]{1}[0-9]{2}[-]{1}[1900-2020]/.test(v)) { //ver cómo hago para que no pongan más de 31, 12 y que no pongan otras cifras en año.
        console.log(true);
    }
    
    else {
        alert("Debes ingresar una fecha válida");     
    }
};





/* Crear el campo de especialidad con lista desplegable
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