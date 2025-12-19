class BandaMusical {
  constructor(nombre, genero, integrantes, discos) {
    this.nombre = nombre;
    this.genero = genero;
    this.integrantes = integrantes;
    this.discos = discos;
  }

  obtenerInfo() {
    return `
      <p><strong>Banda:</strong> ${this.nombre}</p>
      <p><strong>Género:</strong> ${this.genero}</p>
      <p><strong>Integrantes:</strong> ${this.integrantes}</p>
      <p><strong>Discos:</strong></p>
      <ul>
        ${this.discos.map(d => `<li>${d}</li>`).join("")}
      </ul>
    `;
  }
}

function mostrarBanda() {
  const banda = new BandaMusical( "Pink Floyd", "Rock progresivo", 5, ["The Dark Side of the Moon", "Wish You Were Here", "The Wall"]
  );

  console.log(banda);

  document.getElementById("resultado").innerHTML = `
    <h3>Banda Musical</h3>
    ${banda.obtenerInfo()}
  `;
}
