// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
//Puedes usar este array para probar tu función:

const counterWords = [
	"code",
	"repeat",
	"eat",
	"sleep",
	"code",
	"enjoy",
	"sleep",
	"code",
	"enjoy",
	"upgrade",
	"code",
];

// Creo un array sin duplicados, para compararlo con el otro. Un array de salida donde impulsar los resultados. Y una variable que actúa de contador.

const arraySinDuplicados = [];
const arraySalida = [];
let contador = null;

// Primera acción de la función: eliminar duplicados.

function counter(param) {
	for (const item of param) {
		if (!arraySinDuplicados.includes(item)) {
			arraySinDuplicados.push(item);
		}
	}

	// Una vez tengo un array sin duplicados comparo ambos. Si hay dos palabras iguales, sumo uno al contador.
	//Al acabar la vuelta tengo el total de veces que aparece esa palabra.

	for (const item1 of arraySinDuplicados) {
		for (const item2 of param) {
			if (item1 === item2) {
				contador += 1;
			}
		}

		//Impulso la palabra y el contador al array de salida y reseteo el contador.
		//Así al volver a entrar el bucle, con la segunda palabra, el contador estará a 0.

		arraySalida.push(item1 + " = " + contador);
		contador = 0;
	}

	return arraySalida;
}

console.log(counter(counterWords));
