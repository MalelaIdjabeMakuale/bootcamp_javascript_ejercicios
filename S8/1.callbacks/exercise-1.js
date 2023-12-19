const numbersList = [];

function sum(a, b) {
 return a + b;
}

function subtract(a, b) {
 return a - b;
}

function father(a, b, callback) {
 const result = callback(a, b);
 numbersList.push(result);
}

father(5, 2, sum); 
father(3, 4, subtract); 
father(15, 5, sum); 
father(75, 28, subtract); 

console.log(numbersList); 