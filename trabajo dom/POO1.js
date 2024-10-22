class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Administrador extends Usuario {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    mostrarMensaje() {
        const mensaje = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Administrador`;
        document.getElementById('resultado').innerText = mensaje;
    }
}

class Comercial extends Usuario {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    mostrarMensaje() {
        const mensaje = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Comercial`;
        document.getElementById('resultado').innerText = mensaje;
    }
}

function inicializar() {
    const admin = new Administrador('Juan', 30);
    const comercial = new Comercial('María', 25);

    document.getElementById('btnAdmin').addEventListener('click', () => admin.mostrarMensaje());
    document.getElementById('btnComercial').addEventListener('click', () => comercial.mostrarMensaje());
}

document.addEventListener('DOMContentLoaded', inicializar);