const baseUrl = 'https://api.nationalize.io?name=';

const input = document.querySelector("#inputName");
const button = document.querySelector("#btnConsulta");
const resultado = document.querySelector("#resultado");

button.addEventListener('click', async () => {
    const nombre = input.value;
    const url = baseUrl + nombre;

    const respuesta = await fetch(url);

    if (respuesta.ok) {
        const data = await respuesta.json();
        resultado.textContent = data.country;
    } else {
        resultado.textContent = 'Error';
    }
});
