var v1="10";
function ambito(){
    var v1="5";
    window.alert(v1);
}
// Invocar funcion
ambito();

// Muestra la variable desde fuera de la función mediante un window.alert
window.alert(v1);
window.alert(ambito());