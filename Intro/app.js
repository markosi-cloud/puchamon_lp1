
document.addEventListener('DOMContentLoaded', () => {
const pokemonSprites = [
  'assets/images/bulbasaur.png',
  'assets/images/charmander.png',
  'assets/images/squirtle.png',
  'assets/images/weedle.png',
  'assets/images/pidgeotto.png',
  'assets/images/pikachu.png',
  'assets/images/nidoran-m.png',
  'assets/images/clefairy.png',
  'assets/images/abra.png',
  'assets/images/ponyta.png',
  'assets/images/gastly.png',
  'assets/images/onix.png',
  'assets/images/rhydon.png',
  'assets/images/scyther.png',
  'assets/images/magikarp.png',
  'assets/images/ditto.png'
];

let index = 0;
const container = document.getElementById('pokemonContainer');
const pokeEl = document.getElementById('pokemonSprite');

function loadAndAnimate() {
  container.style.transform = 'translateX(-120%)';
  pokeEl.classList.remove('slide-in', 'slide-out');

  pokeEl.style.backgroundImage = `url(${pokemonSprites[index]})`;

  setTimeout(() => {
    pokeEl.classList.add('slide-in');
  }, 100);

  setTimeout(() => {
    pokeEl.classList.remove('slide-in');
    pokeEl.classList.add('slide-out');

    setTimeout(() => {
      index = (index + 1) % pokemonSprites.length;
      loadAndAnimate();
    }, 600);
  }, 5600);
}

loadAndAnimate();

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

document.body.focus();
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = '../Mainscreen/principalMenu.html';
    }, 300);
  }
});

});