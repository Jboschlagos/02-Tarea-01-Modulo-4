class Alumno {
  constructor(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }

  obtenerInfo() {
    return `
      <p><strong>Nombre:</strong> ${this.nombre}</p>
      <p><strong>Edad:</strong> ${this.edad}</p>
      <p><strong>Carrera:</strong> ${this.carrera}</p>
    `;
  }
}

function mostrarAlumno() {
  const alumno = new Alumno("Jorge", 46, "Desarrollador Web");

  console.log(alumno);

  document.getElementById("resultado").innerHTML = `
    <h3>Alumno</h3>
    ${alumno.obtenerInfo()}
  `;
}
