class AdministradorDeTareas {
    constructor() {
        this.tareas = [];
        this.lista = document.createElement("ul");
        document.body.appendChild(this.lista);
    }

    agregarTarea(nombre, asignadoA) {
        this.tareas.push({ nombre: nombre, asignadoA: asignadoA });
        this.mostrarTarea();
    }

    mostrarTarea() {
        this.lista.innerHTML = "";

        this.tareas.forEach((tarea, index) => {
            const elementoLista = document.createElement("li");
            elementoLista.innerHTML = `
                ${tarea.nombre} (Asignado a: ${tarea.asignadoA})
                <button class="editar" data-index="${index}">Editar</button>
                <button class="eliminar" data-index="${index}">Eliminar</button>
            `;

            const botonEditar = elementoLista.querySelector(".editar");
            botonEditar.addEventListener("click", () => {
                this.editarTarea(index);
            });

            const botonEliminar = elementoLista.querySelector(".eliminar");
            botonEliminar.addEventListener("click", () => {
                this.eliminarTarea(index);
            });

            this.lista.appendChild(elementoLista);
        });
    }

    editarTarea(index) {
        const nuevaDescripcion = prompt("Ingrese la nueva descripción de la tarea:");
        const nuevoAsignadoA = prompt("Ingrese el nuevo asignado a:");
        this.tareas[index].nombre = nuevaDescripcion;
        this.tareas[index].asignadoA = nuevoAsignadoA;
        this.mostrarTarea();
    }

    eliminarTarea(index) {
        this.tareas.splice(index, 1);
        this.mostrarTarea();
    }
}

// Inicializar el administrador de tareas
const administradorDeTareas = new AdministradorDeTareas();

// Agregar evento al botón para agregar tareas
document.getElementById("agregarTarea").addEventListener("click", () => {
    const nombreTarea = document.getElementById("nombreTarea").value;
    const asignadoA = document.getElementById("asignadoA").value;

    if (nombreTarea && asignadoA) {
        administradorDeTareas.agregarTarea(nombreTarea, asignadoA);
        document.getElementById("nombreTarea").value = "";
        document.getElementById("asignadoA").value = "";
    } else {
        alert("Por favor, complete ambos campos.");
    }
});