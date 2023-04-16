let isModoNocturno = localStorage.getItem("modoNocturno") === "true" || false;

// Actualizar la interfaz de usuario con el estado almacenado
if (isModoNocturno) {
  document.querySelector(".boton-modo").textContent = "Cambiar a Modo Claro";
  document.body.classList.add("dark-mode");
} else {
  document.querySelector(".boton-modo").textContent = "Cambiar a Modo Nocturno";
  document.body.classList.remove("dark-mode");
}

function toggleDarkMode() {
  isModoNocturno = !isModoNocturno;
  let botonModo = document.querySelector(".boton-modo");

  // Establecer el valor actual del modo nocturno en localStorage
  localStorage.setItem("modoNocturno", isModoNocturno);

  // Actualizar la interfaz de usuario con el nuevo estado
  if (isModoNocturno) {
    botonModo.textContent = "Cambiar a Modo Claro";
    document.body.classList.add("dark-mode");
  } else {
    botonModo.textContent = "Cambiar a Modo Nocturno";
    document.body.classList.remove("dark-mode");
  }
}
