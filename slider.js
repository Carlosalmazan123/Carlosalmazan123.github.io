/* Autor: Jorge García Castro */
/* Inicia el slider automáticamente al cargar */
window.addEventListener("load", iniciar, false);

/* Contador para rastrear la imagen activa */
let contador = 0;

/* Variables globales */
let obj, obj2;

function iniciar() {
  obj = document.getElementById("slider"); // Selecciona el contenedor del slider
  obj2 = obj.getElementsByTagName("img"); // Obtiene todas las imágenes del slider

  // Asegura que solo la primera imagen sea visible al inicio
  for (let i = 0; i < obj2.length; i++) {
    obj2[i].style.opacity = "0";
    obj2[i].style.transition = "opacity 1s ease-in-out"; // Efecto de transición suave
  }
  obj2[0].style.opacity = "1"; // La primera imagen es visible

  // Inicia el cambio automático cada 5 segundos
  setInterval(cambiarImg, 5000);
}

/* Cambia la imagen manualmente al presionar los botones */
function cambiarManual(sentido) {
  obj2[contador].style.opacity = "0"; // Oculta la imagen actual

  if (sentido === "DER") {
    contador = (contador + 1) % obj2.length; // Avanza a la siguiente imagen
  } else if (sentido === "IZQ") {
    contador = (contador - 1 + obj2.length) % obj2.length; // Retrocede a la imagen previa
  }

  obj2[contador].style.opacity = "1"; // Muestra la nueva imagen
}

/* Cambia automáticamente la imagen cada 5 segundos */
function cambiarImg() {
  obj2[contador].style.opacity = "0"; // Oculta la imagen actual
  contador = (contador + 1) % obj2.length; // Avanza a la siguiente imagen
  obj2[contador].style.opacity = "1"; // Muestra la nueva imagen
}
