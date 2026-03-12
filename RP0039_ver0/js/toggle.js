const btn = document.getElementById("toggleBtn");
const texto = document.getElementById("contenedor");

btn.addEventListener("click", () => {
  if (texto.style.display === "none") {
    texto.style.display = "block";
    btn.textContent = "⮟";
  } else {
    texto.style.display = "none";
    btn.textContent = "⮝";
  }
});
