const dialogos = [
    "¡Hola! ¡Bienvenido al mundo de POKÉMON!",
    "Mi nombre es OAK.",
    "Antes de comenzar...",
    "¿Eres HOMBRE o MUJER?"
];

let i = 0;
let etapa = "dialogo";
let nombre = "";
let genero = "";

const texto = document.getElementById("text");
const oak = document.getElementById("oak-sprite");

texto.innerText = dialogos[i];

document.addEventListener("keydown", (e) => {

    // DIÁLOGOS
    if (etapa === "dialogo" && (e.key === "Enter" || e.key === " ")) {
        i++;
        if (i < dialogos.length) {
            texto.innerText = dialogos[i];
        } else {
            etapa = "genero";
            texto.innerText = "Presiona H o M";
        }
    }

    // GÉNERO
    else if (etapa === "genero") {
        if (e.key.toLowerCase() === "h" || e.key.toLowerCase() === "m") {
            genero = e.key.toLowerCase() === "h" ? "Hombre" : "Mujer";
            etapa = "nombre";
            nombre = "";
            texto.innerText = "Escribe tu nombre:\n";
        }
    }

    // NOMBRE
    else if (etapa === "nombre") {

        if (e.key === "Enter" && nombre.trim() !== "") {
            texto.innerText =
                nombre + "...\n\nTu aventura estará por comenzar.";
            oak.style.display = "none";
            etapa = "fin";
            return;
        }

        if (e.key === "Backspace") {
            nombre = nombre.slice(0, -1);
        }
        else if (/^[a-zA-Z0-9]$/.test(e.key) && nombre.length < 12) {
            nombre += e.key;
        }

        texto.innerText = "Escribe tu nombre:\n" + nombre;
    }

});
