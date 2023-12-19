const myInput = document.querySelector("input");

    function leerInput(event) {
      console.log (event.target.value);
    }

    myInput.addEventListener(`focus`, leerInput);

    console.log (leerInput)

    // // myInput.addEventListener("focus", function(event) {
    // //   console.log(event.target.value);
    // // });