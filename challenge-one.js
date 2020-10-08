const input = [7, '33', 40, '12', 12, 9, '70'];
let num = addNum(input);
console.log(num);
// write a function that searches the Array for numbers and returns their sum
function addNum(array){
	//
	// initialize sum
	let sum = 0;
	// loop through given Array
	for(let i = 0; i < array.length; i++){
		//
		// check for "number" data type
		if(typeof array[i] === "number"){
			//
			// increment our sum variable
			sum += array[i];
		}
	}
	return sum;
}
