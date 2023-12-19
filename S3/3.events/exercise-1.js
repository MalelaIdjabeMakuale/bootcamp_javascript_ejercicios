const hacerclick = document.querySelector("#btnToClick");
function leerBtn (btn) {
  console.log(`click:`, btn);
}

hacerclick.addEventListener('click', leerBtn);
