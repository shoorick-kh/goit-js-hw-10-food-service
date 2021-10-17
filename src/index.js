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

function switchTheme(evt) {
  bodyRef.classList.toggle(Theme.DARK);
  if (bodyRef.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
    // themeSwitchToggleRef.classList.add('theme-switch__toggle:checked');
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  // console.log(evt.target.value);
  //   bodyRef.classList.remove(Theme.LIGHT);
  //   bodyRef.classList.add(Theme.DARK);
}
