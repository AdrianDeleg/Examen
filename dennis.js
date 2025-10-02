/*
	Calculadora simple
	- Funciones: add(a,b), subtract(a,b), multiply(a,b)
	- Validación básica de parámetros (deben ser números válidos)
*/

function _validateNumber(value, name) {
	if (typeof value !== 'number' || Number.isNaN(value)) {
		throw new TypeError(`${name} debe ser un número válido`);
	}
}

function add(a, b) {
	_validateNumber(a, 'a');
	_validateNumber(b, 'b');
	return a + b;
}

function subtract(a, b) {
	_validateNumber(a, 'a');
	_validateNumber(b, 'b');
	return a - b;
}

function multiply(a, b) {
	_validateNumber(a, 'a');
	_validateNumber(b, 'b');
	return a * b;
}

// Exportar para uso desde otros módulos (Node.js)
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { add, subtract, multiply };
}

// Si se ejecuta directamente, correr pruebas cortas
if (typeof require !== 'undefined' && require.main === module) {
	console.log('Pruebas rápidas de la calculadora:');
	console.log('add(2, 3) =>', add(2, 3));
	console.log('subtract(5, 2) =>', subtract(5, 2));
	console.log('multiply(4, 3) =>', multiply(4, 3));

	// Ejemplo de manejo de error
	try {
		// eslint-disable-next-line no-throw-literal
		add('x', 1);
	} catch (err) {
		console.log('Error esperado al pasar un argumento inválido:', err.message);
	}
}


/**
 * Suma dos valores numéricos.
 * Convierte los argumentos a Number y arroja TypeError si no son números válidos.
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
function add(a, b) {
	const x = Number(a);
	const y = Number(b);
	if (Number.isNaN(x) || Number.isNaN(y)) {
		throw new TypeError('add: ambos argumentos deben ser números');
	}
	return x + y;
}

/**
 * Resta dos valores numéricos (a - b).
 * Convierte los argumentos a Number y arroja TypeError si no son números válidos.
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
function subtract(a, b) {
	const x = Number(a);
	const y = Number(b);
	if (Number.isNaN(x) || Number.isNaN(y)) {
		throw new TypeError('subtract: ambos argumentos deben ser números');
	}
	return x - y;
}

// Exportar para uso en otros módulos (Node.js)
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { add, subtract };
}

// Pruebas rápidas al ejecutar directamente el archivo
if (require && require.main === module) {
	console.log('Prueba add(2, 3) =>', add(2, 3));
	console.log('Prueba subtract(5, 2) =>', subtract(5, 2));
}
