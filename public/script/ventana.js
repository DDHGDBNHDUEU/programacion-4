console.log("esto abda")
document.addEventListener('DOMContentLoaded', function() {
  const abrirVentanaBtn = document.getElementById('AbrirVentana');
  const ventanaEmergente = document.getElementById('VentanaEmergente');
  const cerrarVentanaBtn = document.getElementById('CerrarVentana');

  abrirVentanaBtn.addEventListener('click', () => {
    ventanaEmergente.classList.remove('oculta');
  });

  cerrarVentanaBtn.addEventListener('click', () => {
    const tituloInput = document.getElementById('titulo').value;
    const contenidoInput = document.getElementById('contenido').value;
    const horaInput = document.getElementById('hora').value;

    const nuevaNota = {
      titulo: tituloInput,
      contenido: contenidoInput,
      hora: horaInput
    };

    fetch('/guardarNota', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaNota)
    })
    .then(response => {
      console.log('La nota se guardó correctamente');
      ventanaEmergente.classList.add('oculta');
      mostrarNotas(); // Llamada a la función para mostrar las notas después de guardar una nueva
    })
    .catch(error => {
      console.error('Error al guardar la nota:', error);
    });
  });

  function mostrarNotas() {
    fetch('/obtenerNotas')
      .then(response => response.json())
      .then(notas => {
        const cardBody = document.querySelector('.card .card-body');
        cardBody.innerHTML = '';

        notas.forEach(nota => {
          const notaElement = document.createElement('div');
          notaElement.classList.add('nota');
          notaElement.innerHTML = `
            <h5 class="card-title">${nota.titulo}</h5>
            <p class="card-text">${nota.contenido}</p>
            <p class="card-text">Hora: ${nota.hora}</p>
          `;
          cardBody.appendChild(notaElement);
        });
      })
      .catch(error => {
        console.error('Error al obtener las notas:', error);
      });
  }

  mostrarNotas(); // Llamada inicial para mostrar las notas al cargar la página
});

