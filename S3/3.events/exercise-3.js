const myInput = document.querySelector("input");

    function leerInput(event) {
      console.log (event.target.value);
    }

    myInput.addEventListener(`input`, leerInput);

    console.log (leerInput)