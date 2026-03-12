const musicBox = document.getElementById("musicBox");

let notasActivas = true;

function crearNota() {
  if (!notasActivas) return;

  const nota = document.createElement("div");
  nota.classList.add("nota");

  const simbolos = ["♪", "♫", "♩", "♬"];
  nota.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];

  nota.style.left = Math.random() * 50 + "px";

  musicBox.appendChild(nota);

  setTimeout(() => {
    nota.remove();
  }, 2000);
}

setInterval(crearNota, 600);

// Conexión con el botón OFF
document.getElementById("boton0ff").addEventListener("click", () => {
  notasActivas = !notasActivas;
});