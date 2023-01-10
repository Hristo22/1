// ¿Como seleccionar?
let formulario=document.getElementById("miFormulario");
// let formulario2=document.forms["miFormulario"];

// let formulario3=document.getElementsByTagName("form")[1];
// let formulario4=documents.forms[1];

// ¿Como seleccioner elementos?
// miFormulario.elements[]
// .getElementById("idElemento"); // Elemento con ese id
// .getElementsByTagName("etiqueta"); // array con elementos con esa etiqueta

window.onload=iniciar;
function iniciar() {
    document.getElementById("Enviar").addEventListener('click', validar, false);
}
// Al pulsar el boton enviar invocaremos a la funcion validar()


function validaNombre() {
    let elemento=document.getElementById("nombre");
    limpiarError(elemento);
    if(elemento.value=="") {
        alert("El campo nombre no puede estar vacio");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    let elemento=document.getElementById("telefono");
    if(isNaN(elemento.value)) {
        alert("El campo telefono tiene que ser numerico");
        return false;
    }
    return true;
}

function validaFecha() {
    let dia=document.getElementById("dia").value;
    let mes=document.getElementById("mes").value;
    let anio=document.getElementById("anio").value;

    let fecha=new Date(anio,mes,dia);

    if(isNaN(fecha)) {
        alert("El campo fecha es incorrecto");
        return false;
    }
    return true;
}

function validaChech() {
    let check=document.getElementById("mayor").value;
    
    if(!check.checked) {
        alert("Debes ser mayor de edad");
        return false;
    }
    return true;
}

function validaSexo() {
    let sex=document.getElementsByName("sexo");
    
    for(let i=0; sex.length; i++) {
        if(sex.checked) {
            return true;
        } else {
            error.preventDefault();
            return false;
        }
    }
}

function validar() {
    if(validaNombre()&&validaTelefono()&&validaFecha()&&validaCheck()&&validaSexo()&&confirm("Pulsa para enviar el formulario")) {
        return true;
    }
    return false;
}

function error(elemento) {
    elemento.className="error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className="";
}