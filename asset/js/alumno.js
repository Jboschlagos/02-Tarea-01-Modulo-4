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

document.getElementById("btnAlumno").addEventListener("click", () => {
  const alumno = new Alumno("Jorge Bosch", 46, "Aprendiz de Desarrollo web y Mueblista");

  console.log(alumno);

  document.getElementById("resultado").innerHTML = `
    <h3>Alumno</h3>
    ${alumno.obtenerInfo()}
  `;
});
