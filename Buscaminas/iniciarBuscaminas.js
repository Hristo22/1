window.addEventListener("load",generarTableroJS);

function generarTableroJS() {
    let tamaño=prompt("Dime el tamaño del tablero");

    for(let i=0; i<tamaño; i++) {
        let miTabla=document.createElement("table");
        miTabla.setAttribute("class","tamañoCeldas");
        let filas=document.createElement("tr");
        filas.setAttribute("class","colorCeldas");
        let columnas;
        for(let i=0; i<tamaño; i++) {    
            columnas=document.createElement("td");
        }
        filas.appendChild(columnas);
        miTabla.appendChild(filas);
    }
    let contenido=document.getElementById("miDiv");
    contenido.appendChild(miTabla);
};

function numeroAleatorio() {

};

function colocarBombasTableroJS() {

};

function dibujarTableroHTML() {

};
