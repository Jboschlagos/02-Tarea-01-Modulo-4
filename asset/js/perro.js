class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  obtenerInfo() {
    return `
      <p><strong>Nombre:</strong> ${this.nombre}</p>
      <p><strong>Raza:</strong> ${this.raza}</p>
      <p><strong>Edad:</strong> ${this.edad}</p>
      <p>🐶 ¡Guau guau!</p>
    `;
  }
}

function mostrarPerro() {
  const perro = new Perro("Olivia", "Salchipapa", 11);

  console.log(perro);

  document.getElementById("resultado").innerHTML = `
    <h3>Perro</h3>
    ${perro.obtenerInfo()}
  `;
}
