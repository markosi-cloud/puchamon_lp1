
const pokemonSprites = [
  'https://img.pokemondb.net/sprites/red-blue/normal/bulbasaur.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/charmander.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/squirtle.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/weedle.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/pidgeotto.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/pikachu.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/nidoran-m.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/clefairy.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/abra.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/ponyta.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/gastly.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/onix.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/rhydon.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/scyther.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/magikarp.png',
  'https://img.pokemondb.net/sprites/red-blue/normal/ditto.png'
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
