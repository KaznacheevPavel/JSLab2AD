'use strict'
const cardsContainer = document.querySelector('.list');
const modal = document.querySelector(".popup");
const trigger = document.querySelector(".button");
const closeButton = document.querySelector(".popup__close");
const addButton = document.querySelector('.popup__button');
const form = document.querySelector('.popup__form');

function createCard(nameValue, yearValue, writerValue, genreValue) { 
    const cardContainer = document.createElement('div');  
    const nameElement = document.createElement('div'); 
    const yearElement = document.createElement('div');
    const writerElement = document.createElement('div');
    const genreElement = document.createElement('div'); 


    cardContainer.classList.add('card_wrapper'); 
    nameElement.classList.add('card__name');
    nameElement.textContent = nameValue; 
    yearElement.classList.add('card__year'); 
    yearElement.textContent = yearValue;
    writerElement.classList.add('card__writer');
    writerElement.textContent = writerValue; 
    genreElement.classList.add('card__genre');
    genreElement.textContent = genreValue; 

    cardContainer.append(nameElement);
    cardContainer.append(yearElement);
    cardContainer.append(writerElement);
    cardContainer.append(genreElement); 


    return cardContainer;
}
function addCard(event) {
    event.preventDefault();

    const name = form.elements.name;
    const year = form.elements.year;
    const writer = form.elements.writer;
    const genre = form.elements.genre;
    const cardContainer = createCard(name.value, year.value, writer.value, genre.value);

    cardsContainer.appendChild(cardContainer);
    
    randomFunction();
    addButton.setAttribute('disabled', true);
    addButton.classList.add('input__btn_disabled');
    
}
function inputHandler() {
    const name = event.currentTarget.elements.name;
    const year = event.currentTarget.elements.year;
    const writer = event.currentTarget.elements.writer;
    const genre = event.currentTarget.elements.genre;

    if (name.value.length === 0 || year.value.length === 0 || writer.value.length === 0 || genre.value.length === 0) {
        addButton.setAttribute('disabled', true);
        addButton.classList.add('input__btn_disabled');
    } else {
        addButton.removeAttribute('disabled');
        addButton.classList.remove('input__btn_disabled');
    }
}

/* Открытие модального окна */
function toggleModal() {
    modal.classList.toggle("popup_is-opened");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
/* Добавление Карточки */


/* Слушатели Событий */
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
modal.addEventListener("click", windowOnClick);
form.addEventListener('input', inputHandler);
form.addEventListener('submit', addCard);