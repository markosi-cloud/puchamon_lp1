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
let nombreRival = "";

const texto = document.getElementById("text");
const oak = document.getElementById("oak-sprite");
const rival = document.getElementById("rival-sprite");

rival.style.display = "none";

texto.innerText = dialogos[i];

document.addEventListener("keydown", (e) => {

    //  Los dialogos
    if (etapa === "dialogo" && (e.key === "Enter" || e.key === " ")) {
        i++;
        if (i < dialogos.length) {
            texto.innerText = dialogos[i];
        } else {
            etapa = "genero";
            texto.innerText = "Presiona H o M";
        }
    }

    // Genero del jugador 
    else if (etapa === "genero") {
        if (e.key.toLowerCase() === "h" || e.key.toLowerCase() === "m") {
            genero = e.key.toLowerCase() === "h" ? "Hombre" : "Mujer";
            etapa = "nombreJugador";
            nombre = "";
            texto.innerText = "Escribe tu nombre:\n";
        }
    }

    // El nombre del jugador
    else if (etapa === "nombreJugador") {

        if (e.key === "Enter" && nombre.trim() !== "") {

            // aparece rival
            rival.style.display = "block";
           // oak.style.left = "35%";
          // rival.style.left = "65%";

            etapa = "introRival";
            texto.innerText =
                nombre + "...\n\nEste es mi nieto...\nSiempre fue tu rival.\n\n¿Cómo se llamaba?";
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

    // El nombre del rival
    else if (etapa === "introRival") {

        if (e.key === "Enter" && nombreRival.trim() !== "") {
            texto.innerText =
                nombre + " y " + nombreRival +
                "...\n\n¡Su aventura está por comenzar!";
            etapa = "fin";
            return;
        }

        if (e.key === "Backspace") {
            nombreRival = nombreRival.slice(0, -1);
        }
        else if (/^[a-zA-Z0-9]$/.test(e.key) && nombreRival.length < 12) {
            nombreRival += e.key;
        }

        texto.innerText =
            "¿Cómo se llamaba?\n" + nombreRival;
    }

});
