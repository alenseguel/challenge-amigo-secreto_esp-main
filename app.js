document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const btnAgregar = document.querySelector(".button-add");
    const btnSortear = document.querySelector(".button-draw");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    // Agregar nombres a la lista
    function agregarAmigo() {
        const nombre = inputAmigo.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = "";
    }

    // Actualizar la lista visible
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((nombre, index) => {
            const li = document.createElement("li");
            li.textContent = nombre;

            // Botón para eliminar nombres
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "❌";
            btnEliminar.classList.add("delete-button");
            btnEliminar.onclick = () => eliminarAmigo(index);

            li.appendChild(btnEliminar);
            listaAmigos.appendChild(li);
        });
    }

    // Eliminar un amigo de la lista
    function eliminarAmigo(index) {
        amigos.splice(index, 1);
        actualizarLista();
    }

    // Sorteo aleatorio de un amigo
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Agrega al menos un nombre antes de sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong> 🎉</li>`;
    }

    // Eventos de los botones
    btnAgregar.addEventListener("click", agregarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);
});
