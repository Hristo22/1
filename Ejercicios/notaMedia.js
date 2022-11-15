// Creamos El array de alumnos
let alumnos=[
    {
        nombre: "Federico",
        nota: 0,
    },
    {
        nombre: "Alberto",
        nota: 0,
    },
    {
        nombre: "Juan",
        nota: 0,
    },
    {
        nombre: "Elias",
        nota: 0,
    },
    {
        nombre: "Alonso",
        nota: 0,
    },
    {
        nombre: "Miguel",
        nota: 0,
    },
    {
        nombre: "Luis",
        nota: 0,
    },
    {
        nombre: "Paula",
        nota: 0,
    },
    {
        nombre: "Monica",
        nota: 0,
    },
    {
        nombre: "Nerea",
        nota: 0,
    },
    {
        nombre: "Ana",
        nota: 0,
    },
    {
        nombre: "Pepe",
        nota: 0,
    },
    {
        nombre: "Jose",
        nota: 0,
    },
    {
        nombre: "Julian",
        nota: 0,
    },
    {
        nombre: "Erick",
        nota: 0,
    },
];

// Sacar todos los alumnos por pantalla
let nombres="";
for(let i=0; i<alumnos.length; i++) {
    nombres+=alumnos[i].nombre+"\n";
}
alert(nombres);

// Pedir notas alumnos
let notas=0;
for(let i=0; i<alumnos.length; i++) {
    notas=prompt("Dime la nota del alumno " + alumnos[i].nombre);
    alumnos[i].nota=notas;
}

//Sacar nombre y nota
let notaYnombre="";
for(let i=0; i<alumnos.length; i++) {
    notaYnombre+=alumnos[i].nombre + " " + alumnos[i].nota +"\n";
}
alert(notaYnombre);

//Sacar media alumnos
let total=0;
for(let i=0; i<alumnos.length; i++) {
    total+=Number(alumnos[i].nota);
}
console.log(total);
let mediaNotas=total/alumnos.length;
console.log(mediaNotas);

/*

// Sacar nota alumno indicado
let alumno=prompt("Dime el nombre del alumno");
for(let i=0; i<alumnos.length; i++) {
    if(alumnos[i].nombre === alumno) {    
        console.log(alumnos[i].nota);
    }
}

*/