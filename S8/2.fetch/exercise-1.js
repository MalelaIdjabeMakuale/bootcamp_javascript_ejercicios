const apiUrl = 'https://api.agify.io?name=michael';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });