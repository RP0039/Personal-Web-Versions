
//  ---- MODO OCURO ----  //

let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');

// aplicar tema guardado
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    label_toggle.style.color = "white";
}

toggle.addEventListener('change', (event) => {

    let checked = event.target.checked;

    document.body.classList.toggle('dark');

    if (checked) {
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        label_toggle.style.color = "white";

        localStorage.setItem("theme", "dark");
    } else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = "black";

        localStorage.setItem("theme", "light");
    }

});
