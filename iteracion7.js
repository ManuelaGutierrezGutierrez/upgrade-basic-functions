// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array
//comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
//Puedes usar este array para probar tu función:

const nameFinder = [
	"Peter",
	"Steve",
	"Tony",
	"Natasha",
	"Clint",
	"Logan",
	"Xabier",
	"Bruce",
	"Peggy",
	"Jessica",
	"Marc",
];
function finderName(param1, param2) {
	for (let item of param1) {
		if (item === param2) {
			return true + ". El elemento está en la posición " + param1.indexOf(item);
		}
	}
	return false;
}

console.log(finderName(nameFinder, "Bruce"));
