const RESULT_PREFIX = '=C2+C18';
const COLUMNS       = ['K', 'L', 'M', 'N'];
const FIRST_ROW     = 3;
const LAST_ROW      = 17;
const ZERO          = 0;

let result          = '' + RESULT_PREFIX;
let columnsLen      = COLUMNS.length;

for (let i = ZERO; i < columnsLen; i++) {
	for(let j = FIRST_ROW; j <= LAST_ROW; j++ ) {
		result += `+IF(${COLUMNS[i]}${j},C${j},0)`;
	}
}
console.log(result);




/*
const FIRSTROW = 3;
const LASTROW = 17;
let arr2 = addString(FIRSTROW, LASTROW);
let sum = "";
let s = "=C2+C18";
let result = '';

for (let i = 0; i < arr2.length; i++) {
	if (sum === "") {
		sum = arr2[i];
	} else {
		sum = sum + "+" + arr2[i];
	}
}
result = s + "+" + sum;
console.log(result);

function addString(a, b) {
	let abc = [];
	let columns = massive("K", "L", "M", "N");
	for (let i = a; i <= b; i++) {
		for (let j = 0; j < columns.length; j++) {
			abc.push(`IF(${columns[j]}${i},C${i},0)`);
		}
	}
	return abc;
}

function massive() {
	let arrArg = [];
	for (i = 0; i <= arguments.length - 1; i++) {
		arrArg.push(arguments[i]);
	}
	return arrArg;
}
// massive("K", "L", "M", "N");ы
// ["D", "F", "E", "G"]
*/