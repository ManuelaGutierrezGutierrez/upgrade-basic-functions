// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
	let buffer = 0;
	for (let item of param) {
		buffer += item;
	}
	let promedio = buffer / param.length;
	return promedio;
}

console.log(average(numbers));
