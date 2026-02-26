
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
