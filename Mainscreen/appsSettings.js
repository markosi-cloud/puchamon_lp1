// Esperamos a que toda la página se cargue antes de tocar el DOM
// Esto evita errores si el script se ejecuta antes de que existan los elementos.
document.addEventListener('DOMContentLoaded', function() {
    // guardamos qué título tiene actualmente el triángulo blanco en cada sección.
    // usamos null cuando ninguno está seleccionado.
    const activeTriangles = {
        speed: null,
        animation: null,
        style: null
    };

    // objeto para recordar qué opción eligió el jugador en cada sección
    // solo se usa para debug aquí, pero podrías guardarlo en localStorage etc.
    const selectedOptions = {
        speed: 'fast',
        animation: 'on',
        style: 'shift'
    };

    // -------------------------
    // hacer reaccionar los títulos grandes al clic
    // -------------------------
    document.querySelectorAll('.box-title').forEach(title => {
        title.addEventListener('click', function() {
            const section = this.dataset.section;            // "speed" / "animation" / "style"
            const triangle = this.querySelector('.triangle'); // el triángulo dentro del título

            // si el título ya estaba activo, lo desactivamos
            if (activeTriangles[section] === this) {
                triangle.classList.remove('white', 'visible');
                activeTriangles[section] = null;
            } else {
                // si había otro título activo antes, lo apagamos primero
                if (activeTriangles[section]) {
                    activeTriangles[section].querySelector('.triangle')
                        .classList.remove('white', 'visible');
                }
                // ponemos el triángulo blanco en el nuevo título
                triangle.classList.add('white', 'visible');
                activeTriangles[section] = this;
            }
        });
    });

    // -------------------------
    // detectar clicks en opciones pequeñas (fast/medium/slow, on/off, etc.)
    // -------------------------
    document.querySelectorAll('.option-item').forEach(option => {
        option.addEventListener('click', function() {
            const optionValue = this.dataset.option; // e.g. "fast"
            // buscamos el título correspondiente subiendo en el DOM hasta el bloque
            const section = this.closest('.pkm-menu-inner')
                                .querySelector('.box-title').dataset.section;

            // guardamos selección (aquí solo se imprime en consola)
            selectedOptions[section] = optionValue;
            console.log(`${section}: ${optionValue} seleccionado`);
        });
    });

    // -------------------------
    // botón "CANCEL" regresa al menú principal
    // -------------------------
    document.getElementById('cancel-btn').addEventListener('click', function() {
        // antes de irnos, guardamos la posición actual de la música
        const music = document.getElementById('titleMusic');
        if (music) sessionStorage.setItem('bgmTime', music.currentTime);

        // redirigimos sin abrir otra pestaña
        window.location.href = 'principalMenu.html';
    });
});