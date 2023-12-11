let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

let precioTotal1 = globalBasePrice + car1.basePrice
console.log("El precio toal del BMW m&m es", precioTotal1)

let precioTotal2 = globalBasePrice + car2.basePrice
console.log("El precio total del Chevrolet Corbina es", precioTotal2)