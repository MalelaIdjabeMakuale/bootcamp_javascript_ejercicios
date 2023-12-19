// Dado un array, utilizar map para multiplicar cada elemento por 4.
const numeros = [1, 2, 3, 4, 5];

const result = numeros.map((num) => num * 4);

console.log(result);

// Dado el siguiente array de objetos, con map generar un nuevo array que concatene nombre y apellido   
const vengadores = [  {
nombre
:
"Tony"
,
apellidos
:
"Stark"
},  {
nombre
:
"Steve"
,
apellidos
:
"Rogers"
},  {
nombre
:
"Bruce"
,
apellidos
:
"Banner"
},  {
nombre
:
"Natasha"
,
apellidos
:
"Romanoff"
},  {
nombre
:
"Thor"
,
apellidos
:
"Odinson"
},  {
nombre
:
"Clint"
,
apellidos
:
"Barton"
},];

// // const vengadoresNombres = vengadores.map(({nombre, apellidos}) => `${nombre} ${apellidos}`)
// // console.log(vengadoresNombres)


// Dado un array, vamos a filtrar los numeros que sean multiplos de 3;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let multiplosde3 = numbers.filter ((num) => num % 3 === 0);
console.log(multiplosde3)



// Dado un array, encontrar con find el primer elemento con sexo femenino 
const personas = [ 
  {nombre:"Cristian", edad:25, sexo:"M"},  {nombre:"Ana", edad:20, sexo:"F"},  {nombre:"Fernando", edad:15, sexo:"M"},  {nombre:"Alejandra", edad:11, sexo:"F"},];

  const Fem = personas.find((Fem) => Fem.sexo == "F")
  console.log(Fem)