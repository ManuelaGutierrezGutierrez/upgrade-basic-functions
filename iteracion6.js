const duplicates = [
	"sushi",
	"pizza",
	"burger",
	"potatoe",
	"pasta",
	"ice-cream",
	"pizza",
	"chicken",
	"onion rings",
	"pasta",
	"soda",
];

const finalArray = [];

function removeDuplicates(param) {
	for (const item of param) {
		if (!finalArray.includes(item)) {
			finalArray.push(item);
		}
	}
	return finalArray;
}

console.log(removeDuplicates(prueba2));
