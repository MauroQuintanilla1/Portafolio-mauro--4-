const btn = document.getElementById("btnIdioma");
const texto = btn.querySelector(".idioma-texto");

let idioma = localStorage.getItem("idioma") || "es";

function aplicarIdioma() {
  document.documentElement.lang = idioma;

  texto.textContent = idioma.toUpperCase();

  document.querySelectorAll("[data-es]").forEach((el) => {
    el.innerHTML = el.getAttribute(`data-${idioma}`);
  });
}

aplicarIdioma();

btn.addEventListener("click", () => {
  btn.classList.add("cambiando");

  idioma = idioma === "es" ? "en" : "es";
  localStorage.setItem("idioma", idioma);

  aplicarIdioma();

  setTimeout(() => {
    btn.classList.remove("cambiando");
  }, 450);
});
