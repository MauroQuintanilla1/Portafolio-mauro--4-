function mostrarSeccion(id, event) {
  // 1. Manejo de Secciones
  let secciones = document.querySelectorAll(".seccion");
  secciones.forEach((sec) => {
    sec.classList.remove("visible");
  });

  let seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.classList.add("visible");
  }

  // 2. Manejo de Botones (Clase Activo)
  let botones = document.querySelectorAll(".menu button");
  botones.forEach((b) => {
    b.classList.remove("activo");
  });

  // Si el evento existe, usamos currentTarget para marcar el botón
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("activo");
  } else {
    // Opción de respaldo: si entras a la web por primera vez y no hay 'event'
    // busca el botón que coincida con la sección para marcarlo
    const btnManual = document.querySelector(`button[onclick*='${id}']`);
    if (btnManual) btnManual.classList.add("activo");
  }

  console.log("Cambiando a: " + id);
}

function guardarSeccion(seccion) {
  localStorage.setItem("seccionActiva", seccion);
}

window.addEventListener("load", () => {
  const seccion = localStorage.getItem("seccionActiva");

  if (seccion) {
    mostrarSeccion(seccion);
    localStorage.removeItem("seccionActiva");
  }
});

function hola() {
  console.log("hola");
}
