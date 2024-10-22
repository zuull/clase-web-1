class ListaTareas {
    constructor(idLista) {
        this.idLista = idLista;
        this.tareas = [];
        this.contador = 0;
    }

    agregarTarea(tarea) {
        const nuevaTarea = {
            id: `tarea-${this.contador}`,
            texto: tarea
        };

        this.tareas.push(nuevaTarea);
        this.contador++;

        this.mostrarTarea(nuevaTarea);
    }

    mostrarTarea(tarea) {
        const lista = document.getElementById(this.idLista);
        const elementoLi = document.createElement('li');
        elementoLi.id = tarea.id;
        elementoLi.textContent = tarea.texto;

        lista.appendChild(elementoLi);
    }
}

const listaTareas = new ListaTareas('lista-tareas');

document.getElementById('btn-agregar').addEventListener('click', () => {
    const tarea = document.getElementById('input-tarea').value;
    listaTareas.agregarTarea(tarea);
    document.getElementById('input-tarea').value = '';
});