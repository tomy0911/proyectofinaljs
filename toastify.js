const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  Toastify({
    text: "Agregaste un producto",
    duration: 1500,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #23395b, #406e8e)",
    },
  }).showToast();
})