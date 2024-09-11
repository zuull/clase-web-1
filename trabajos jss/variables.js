// Variables
let nombre = prompt("Pon tu nombre");
let apellido;
let numero = prompt("Escribe tu número");
let edad;
//const
const nombreCorrecto = "alejandra";
const numAleja = 2;
const edadAle = 20;
const saludoGenerico = "Bienvenida <b>";
const saludoAleja = "Bienvenida Aleja";
const saludarNuevo = "Puedes entrar por ser mayor de edad";

// Función con cero parámetros
const mostrarSaludoGenerico = () => {
    document.write(saludoGenerico + "<br>");
};

mostrarSaludoGenerico();

if (nombre === nombreCorrecto && numero == numAleja) {
    apellido = "Eres de apellido Cardona" + "<br>";
    document.write(apellido);
    if (edadAle === 20) {
        document.write(saludoAleja + " y recuerda que tu ID es " + numAleja + "<br>");
    }
} else {
    apellido = prompt("Pon tu apellido");
    document.write("Tu apellido es " + apellido + "<br>");
    edad = prompt("Pon tu edad");
    if (edad > 18) {
        document.write(saludarNuevo + " y recuerda que tu ID es " + numero + "<br>");
    }
    document.write("Tu número es " + numero + "<br>");
}