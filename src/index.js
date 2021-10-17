import './sass/main.scss';
import cardFoodTpl from './templates/card-food.hbs';
import food from './menu.json';

const bodyRef = document.querySelector('body');
const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const foodContainerRef = document.querySelector('.js-menu');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const cardsFood = createCardsFood(food);

foodContainerRef.insertAdjacentHTML('beforeend', cardsFood);

function createCardsFood(food) {
  return cardFoodTpl(food);
}
