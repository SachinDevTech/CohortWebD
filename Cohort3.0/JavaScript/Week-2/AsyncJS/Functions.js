// Normal functions in JS
//Find sum of two numbers

function sum(a, b) {
	return a + b;
}

let ans1 = sum(2, 3)
console.log(ans1);

// Find sum from 1 to a number
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans = sum(100);
console.log(ans);