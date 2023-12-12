const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (const movie of movies)

if (movie.durationInMinutes < 100) {
    smallMovies.push(movie);
  } else if (movie.durationInMinutes <= 200) {
    mediumMovies.push(movie);
  } else {
    largeMovies.push(movie);
  }

console.log("Las siguientes películas son de corta duración:", smallMovies);
console.log("Estas películas tienen una duración media:", mediumMovies);
console.log("Estas películas son de larga duración:", largeMovies);
