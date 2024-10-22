class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre; 
        this.edad = edad;  
    }
}

class Administrador extends Usuario {
    constructor(nombre, edad) {
        super(nombre, edad); 
        this.rol = 'Administrador'; 
    }

    mostrarInfo() {
        const output = document.getElementById('output');
        output.innerHTML = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: ${this.rol}`;
    }
}

// Clase hija Comercial
class Comercial extends Usuario {
    constructor(nombre, edad) {
        super(nombre, edad); 
        this.rol = 'Comercial'; 
    }

    mostrarInfo() {
        const output = document.getElementById('output');
        output.innerHTML = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: ${this.rol}`;
    }
}

// Crear instancias de las clases
const admin = new Administrador('Juan', 30);
const comercial = new Comercial('María', 25);

document.getElementById('adminBtn').addEventListener('click', () => admin.mostrarInfo());
document.getElementById('comercialBtn').addEventListener('click', () => comercial.mostrarInfo());