// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === ""){
        alert("Por favor escribe un nombre valido");
        return
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar lista

  for (const amigo of amigos) {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  } 

}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay participantes para sortear.");
    return;
  }

  // Elegir índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  // Mostrar resultado
  alert("El amigo secreto es: " + ganador);

}


