document.addEventListener('DOMContentLoaded', () => {
        // obtén referencias a cada botón por su id (se asignaron en el HTML)
    const btnNewgame = document.getElementById("newgame");
    const btnOptions = document.getElementById("options");
    const btnCancel = document.getElementById("cancel");
    // también sacamos el elemento de audio para poder leer su tiempo
    const audio = document.getElementById('titleMusic');

    // cuando el usuario cliquea "nuevo juego"...
    btnNewgame.addEventListener('click', () => {
        // guardamos la posición actual de la música en sessionStorage
        // de modo que al volver desde otra pantalla continúe desde aquí
        if (audio) sessionStorage.setItem('bgmTime', audio.currentTime);
        // luego navegamos a la página de introducción
        window.location.href = "../newGameIntro/index.html";
    });

    // "opciones" abre la pantalla de ajustes
    btnOptions.addEventListener('click', () => {
        if (audio) sessionStorage.setItem('bgmTime', audio.currentTime);
        window.location.href = "./settings.html";
    });

    // "cancel" regresa al menú principal (aquí mismo estamos ya en principal,
    // pero el botón podría usarse en otros contextos, por eso se conserva)
    btnCancel.addEventListener('click', () => {
        if (audio) sessionStorage.setItem('bgmTime', audio.currentTime);
        window.location.href = "./principalMenu.html";
    });

<<<<<<< HEAD
btnCancel.addEventListener('click', () => {
    window.location.href = "./principalMenu.html";
});
const music = document.getElementById('titleMusic');
music.volume = 0.7;
music.play().catch(() => {
  const resume = () => {
    music.play();
    document.removeEventListener('click', resume);
    document.removeEventListener('keydown', resume);
  };
  document.addEventListener('click', resume);
  document.addEventListener('keydown', resume);
});
/**/ 
=======
    /**/ 
});
>>>>>>> b2503b4b7b1b9d090803b6ef93a11a5b07a0d6eb
