var cadena = prompt("Introduce una cadena:");
cadena.toUpperCase();

//Compruebo si hay algun patron en la cadena
var verdadero02 = cadena.includes("101")
var verdadero01 = cadena.includes("00")
var verdadero03 = cadena.includes("ABC")
var verdadero04 = cadena.includes("H0")

//Si hay algun patron realiza la cuenta, si no se sale directamente
if(verdadero01 || verdadero02 || verdadero03 || verdadero04){
    //Llama a la funcion contarPatrones()
    var patrones = contarPatrones(cadena);
    //Se saca por pantalla la cuenta de patrones y el total
    alert("Patron 00: " + patrones[0]+ "/ Patron 101: "+patrones[1]+ "/ Patron ABC: "+patrones[2]+ "/ Patron H0: "+patrones[3]+ "/ Total de patrones: " +patrones[4])
}else{
    //Si no encuentra ningun patron, termina el programa
    alert("La cadena no contiene ningun patron.")
}



//Funcion contarPatrones(): cuenta los patrones que hay en una cadena que se le pasa por parámetro
function contarPatrones(cadena){
    //Creo un contador para cada patrón
    var contador1 = 0;
    var contador2 = 0;
    var contador3 = 0;
    var contador4 = 0;

    //Bucle en el que si encuentra un patron, suma 1 al contador correspondiente
    for (let index = 0; index <= cadena.length; index++) {
        //Contador de "00"
        if(cadena.charAt(index) == "0" && cadena.charAt(index+1) == "0"){
            contador1++;
        }
        //Contador de "101"
        if(cadena.charAt(index) == "1" && cadena.charAt(index+1) == "0" && cadena.charAt(index+2) == "1"){
            contador2++;
        }
        //Contador de "ABC"
        if(cadena.charAt(index) == "A" && cadena.charAt(index+1) == "B" && cadena.charAt(index+2) == "C"){
            contador3++;
        }
        //Contador de "H0"
        if(cadena.charAt(index) == "H" && cadena.charAt(index+1) == "0"){
            contador4++;
        }
    }

    //Se suman todos los patrones encontrados para hacer un total
    var total = contador1 + contador2 + contador3 + contador4;

    //Se introducen los patrones contados en un array + el total al final
    var patrones = [contador1, contador2, contador3, contador4, total];

    //Se devuelve un array con los patrones contados
    return patrones;
}