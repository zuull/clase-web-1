let nombre = prompt("Pon tu nombre");
let apellido;
let numero = prompt("Escribe tu número del 1 al 5 para abrir la caja de sorpresas");
let edad;
let password
let frutas = prompt("coloca tus frutas favoritas separadas por ,")
//const
const numAleja = 2;
const nombreCorrecto = "alejandra";
const edadAle = 20;
const saludoGenerico = "<b>Bienvenida</b>";
const saludoAleja = "Bienvenida Aleja";
const saludarNuevo = "Puedes entrar por ser mayor de edad";

const mostrarSaludoGenerico = () => {
    document.write(saludoGenerico + "<br>");
};

// Mostrar saludo genérico al principio
mostrarSaludoGenerico();

const sumar = (a,b) => a + b;

const verificarEdad = (edad) => {
    if (edad >= 18) {
        document.write(saludarNuevo + "<br>");
    } else {
        document.write("No puedes entrar por ser menor de edad.<br>");
    }
};

const mostrarFrutas = () => {
    frutas.split(',').forEach((fruta, index) => document.write('fruta #' + (index + 1) + ' ' + fruta + '<br>'))
}

mostrarFrutas();


const cajitaSorpresas = () => {
    switch (numero) {
        case "1":
            document.write("Brownie. <br>")
            break;
        case "2":
            document.write("Botella de agua. <br>")
            break;
        case "3":
            document.write("Papas. <br>")
            break;
        case "4":
            document.write("Aguacate. <br>")
            break;
        case "5":
            document.write("Nada. <br>")
            break;
    }
};

cajitaSorpresas(numero);

if (nombre === nombreCorrecto && numero == numAleja) {
    apellido = "Eres de apellido Cardona" + "<br>";
    document.write(apellido);
    if (edadAle === 20) {
        document.write(saludoAleja + " y recuerda que tu ID es " + numAleja + "<br>");
    }
} else {
    apellido = prompt("Pon tu apellido");
    document.write("Tu apellido es " + apellido + "<br>");
    edad = parseInt(prompt("Pon tu edad"), 10); // Convertir edad a número entero
    verificarEdad(edad);
    document.write("Tu número es " + numero + "<br>");
}