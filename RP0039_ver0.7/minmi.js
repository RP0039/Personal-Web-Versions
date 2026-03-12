
// --- Control de ventanas estilo Windows 98 para 98.css ---
document.querySelectorAll(".window").forEach(win => {
  const body = win.querySelector(".window-body");
  const mainBox = win.querySelector("#mainBox");

  const btnMin = win.querySelector("button[aria-label='Minimize']");
  const btnMax = win.querySelector("button[aria-label='Maximize']");
  const btnClose = win.querySelector("button[aria-label='Close']");

  let isMax = false;

  // Guardar estado anterior
  let prev = {
    left: "",
    top: "",
    width: "",
    height: "",
    position: "",
    marginTop: "",
    mainBoxHeight: ""
  };

  // --- MINIMIZAR ---
  btnMin.addEventListener("click", () => {
    body.style.display =
      body.style.display === "none" ? "" : "none";
  });

  // --- CERRAR ---
  btnClose.addEventListener("click", () => {
    win.style.display = "none";
  });
})