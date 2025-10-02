/*
	Calculadora simple
	- Funciones: add(a,b), subtract(a,b), multiply(a,b), divide(a,b)
	- Validación básica de parámetros (acepta numbers o strings numéricos)
*/

/**
 * Convierte un valor a Number y valida que no sea NaN.
 * @param {number|string} value
 * @param {string} name nombre del parámetro para mensajes de error
 * @returns {number}
 */
function _toNumber(value, name) {
	const n = Number(value);
	if (Number.isNaN(n)) {
		throw new TypeError(`${name} debe ser un número válido`);
	}
	return n;
}

/**
 * Suma dos valores numéricos.
 */
function add(a, b) {
	return _toNumber(a, 'a') + _toNumber(b, 'b');
}

/**
 * Resta dos valores numéricos (a - b).
 */
function subtract(a, b) {
	return _toNumber(a, 'a') - _toNumber(b, 'b');
}

/**
 * Multiplica dos valores numéricos.
 */
function multiply(a, b) {
	return _toNumber(a, 'a') * _toNumber(b, 'b');
}

/**
 * Divide dos valores numéricos (a / b). Lanza RangeError si b es 0.
 */
function divide(a, b) {
	const x = _toNumber(a, 'a');
	const y = _toNumber(b, 'b');
	if (y === 0) {
		throw new RangeError('divide: división por cero');
	}
	return x / y;
}

// Exportar para uso desde otros módulos (Node.js)
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { add, subtract, multiply, divide };
}

// Si se ejecuta directamente, correr pruebas cortas
if (typeof require !== 'undefined' && require.main === module) {
	console.log('Pruebas rápidas de la calculadora:');
	console.log('add(2, 3) =>', add(2, 3));
	console.log('subtract(5, 2) =>', subtract(5, 2));
	console.log('multiply(4, 3) =>', multiply(4, 3));
	console.log('divide(10, 2) =>', divide(10, 2));

	// Casos de error esperados
	try {
		divide(1, 0);
	} catch (err) {
		console.log('Error esperado divide(1,0):', err.message);
	}

	try {
		add('x', 1);
	} catch (err) {
		console.log('Error esperado add("x",1):', err.message);
	}
}
