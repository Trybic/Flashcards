const addToFlashcards = document.querySelector('#add-to-flashcards');
const cardFrontText = document.querySelector('#get-front-text');
const cardBackText = document.querySelector('#get-back-text');
const flashcards = document.querySelector('#flashcards');
const deleteCards = document.querySelector('#delete');

addToFlashcards.addEventListener(
  'submit',
  (event) => {
    event.preventDefault();

    if (cardFrontText.value.length < 1) return;
    flashcards.innerHTML += `<div class="card theme"><div class="card__front hidden"><p class="card__text">${cardBackText.value}</p></div><div class="card__back"><p id="countdown" class="card__text">${cardFrontText.value}</p></div></div>`;
    addToFlashcards.reset();
    localStorage.setItem('flashCards', flashcards.innerHTML);
    window.location.reload(true);
  },
  false
);

const saved = localStorage.getItem('flashCards');

if (saved) {
  flashcards.innerHTML = saved;
}

deleteCards.onclick = () => {
  localStorage.removeItem('flashCards');
  window.location.reload(true);
};

const cards = document.querySelectorAll('.card');

function flipCard() {
  this.querySelector('.card__front').classList.toggle('hidden');
  this.querySelector('.card__back').classList.toggle('hidden');
}
cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});
