
const btnNewgame = document.getElementById("newgame");
const btnOptions = document.getElementById("options");
const btnCancel = document.getElementById("cancel");

btnNewgame.addEventListener('click', () => {
    window.location.href = "../newGameIntro/index.html";
});

btnOptions.addEventListener('click', () => {
    window.location.href = "./settings.html";
});

btnCancel.addEventListener('click', () => {
    window.location.href = "./principalMenu.html";
});

/**/ 
