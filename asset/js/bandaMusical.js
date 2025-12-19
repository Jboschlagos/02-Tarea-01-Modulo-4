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
      <ul>
        ${this.discos.map(d => `<li>${d}</li>`).join("")}
      </ul>
    `;
  }
}

document.getElementById("btnBanda").addEventListener("click", () => {
  const banda = new BandaMusical(
    "Pink Floyd",
    "Rock progresivo",
    5,
    ["The Dark Side of the Moon", "The Wall"]
  );

  console.log(banda);

  document.getElementById("resultado").innerHTML = `
    <h3>Banda Musical</h3>
    ${banda.obtenerInfo()}
  `;
});
