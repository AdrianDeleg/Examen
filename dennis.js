
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
