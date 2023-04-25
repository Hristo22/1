// Funcion Flecha
document.getElementById("google").addEventListener("click", () => window.open("https://google.com/", "_blank"));

// Dias Seleccionados, al menos 2
let daysChecked=0;
let days=event.target.day;
days.forEach(d => {
    if(d.checked) daysChecked++;
});
if(daysChecked<2) error.push("Tiene que haber al menos 2 dias seleccionados");