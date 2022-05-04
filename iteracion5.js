// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
// Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
	let buffer0 = 0;
	let buffera = 0;
	for (let item of param) {
		let typeItem = typeof item;
		if (typeItem === "string") {
			buffera += item.length;
		} else if (typeItem === "number") {
			buffer0 += item;
		}
	}
	return buffer0 + buffera;
}

console.log(averageWord(mixedElements));
