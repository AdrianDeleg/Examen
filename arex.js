// Archivo creado por arex
// contiene funciones utilitarias

// sumar dos números
function sumar(a, b) {
  return a + b;
}

// función para saludar al usuario
function saludar(nombre) {
  return `Hola ${nombre}, bienvenido!`;
}

// variable de versión de la aplicación
const version = "1.0.0";

// función principal de inicialización
function iniciar() {
  console.log("Aplicación arex iniciada correctamente");
  console.log(`Versión: ${version}`);
}

// exportar las funciones para uso externo
module.exports = {
  sumar,
  saludar,
  version,
  iniciar
};

// Método para calcular área de rectángulo - NUEVO
function areaRectangulo(largo, ancho) {
  return largo * ancho;
}

// Método para calcular el factorial - NUEVO
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}