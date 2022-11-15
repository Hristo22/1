function global(){
    var g="10";
    window.alert(g);
}
// Invocar funcion
global();

// Muestra la variable desde fuera de la función mediante un window.alert
window.alert(global());