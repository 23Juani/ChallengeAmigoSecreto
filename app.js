// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función agregar amigos
function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo'); // Cambiado a 'amigo'
  const nombreAmigo = inputAmigo.value.trim(); // Cambiado a 'value'

  // Validar que el campo no esté vacío
  if (nombreAmigo === '') {
    alert('Debes ingresar un nombre');
    return;
  }

  // Validar que el nombre no esté repetido
  if (amigos.includes(nombreAmigo)) {
    alert('Este amigo ya fue agregado');
    return;
  }

  // Agregar el nombre al Array de amigos y limpiar el input
  amigos.push(nombreAmigo);
  inputAmigo.value = '';

  // Actualizar la lista en el HTML
  actualizarListaAmigos();
}

// Función actualizar lista de amigos
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función seleccionar amigo
function sortearAmigo() {
  // Validar que haya amigos disponibles en el array 
  if (amigos.length === 0) {
    alert('Debes agregar amigos antes de sortear');
    return;
  }

  // Generar un índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indice];

  // Eliminar el amigo sorteado de la lista
  amigos.splice(indice, 1);

  // Mostrar el nombre en el HTML
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Amigo sorteado: <strong>' + amigoSorteado + '</strong>';

  // Actualizar la lista de amigos en el HTML
  actualizarListaAmigos();
}