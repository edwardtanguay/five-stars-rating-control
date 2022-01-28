import { setStars } from './StarComponent.js';

const starsElem = document.querySelector('.stars');
const numberElem = document.querySelector('.number');

const cachedStars = Number(localStorage.getItem('stars'));
const number = cachedStars === null ? 3 : cachedStars;

const createStars = (number) => {
	starsElem.innerHTML = '';
	for (let i = 1; i <= number; i++) {
		starsElem.innerHTML += `<i onclick="setStars(${i})" class="fa fa-star"></i>`;
	}
	for (let i = number + 1; i <= 5; i++) {
		starsElem.innerHTML += `<i onclick="setStars(${i})" class="fa fa-star-o"></i>`;
	}
	numberElem.innerText = number;
}

createStars(number);