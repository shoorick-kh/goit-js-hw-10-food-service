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
themeStart();

function themeStart() {
  if (!localStorage.length) {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  bodyRef.classList.add(localStorage.getItem('theme'));
}

themeSwitchToggleRef.addEventListener('change', switchTheme);

if (bodyRef.classList.contains(Theme.DARK)) {
  themeSwitchToggleRef.checked = true;
}

function switchTheme(evt) {
  bodyRef.classList.toggle(Theme.DARK);
  if (bodyRef.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
