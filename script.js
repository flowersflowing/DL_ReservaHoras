/*
TO DO
- Recoger los datos con get Element y almacenarlos en variables :)
- Hacer una función que valide todos al mismo tiempo :)
- Hacer las operaciones de cada validación por separado. :)
    - Validar rut (formato) :)
    - Validar nombres (sólo letras) :)
    - Validar apellidos (sólo letras) :)
    - Validar edad (que sólo tenga números) :)
    - Validar mail (formato) :)
    - Validar fecha (validar que sean números y en formato dd-mm-aaaa) :)
- Llamar las funciones dentro de la función de validación :)
- Entregar mensaje de vuelta :)
- Darle forma al mensaje de vuelta con un innerHTML
- Crear el campo de especialidad con lista desplegable
- Crear el campo de hora con horas desplegables
*/

//Almacenar los valores en variables

var rut = document.getElementById("rut");
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var edad = document.getElementById("edad");
var correo = document.getElementById("correo");
var fecha = document.getElementById("fecha");
var especialidad; //ver especialidad
var hora; //ver hora

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

    document.write("<div><p>Estimado(a) " + nombres + " " + apellidos + ", su hora para " + especialidad + " ha sido reservada para el día " + fecha + " a las " + hora + ". Además, se le envió un mensaje a su correo " + correo + " con el detalle de su cita.</p>" + "<p>Gracias por preferirnos.</p></div>")
};

//Validaciones

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
    if (v.length > 0 && /[0-3]{1}[0-9]{1}[-]{1}[0-1]{1}[0-9]{1}[-]{1}[1-2]{1}[0-9]{3}/.test(v)) {
        console.log(true);
    }
    
    else {
        alert("Debes ingresar una fecha válida");     
    }
};