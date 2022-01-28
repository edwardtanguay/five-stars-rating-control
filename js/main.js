const starsElem = document.querySelector('.stars');
const numberElem = document.querySelector('.number');

const number = 3;

// stars
for (let i = 1; i <= number; i++) {
	starsElem.innerHTML += `<i onclick="setStars(${i})" class="fa fa-star"></i>`;
}
for (let i = number + 1; i <= 5; i++) {
	starsElem.innerHTML += `<i onclick="setStars(${i})" class="fa fa-star-o"></i>`;
}

// number
numberElem.innerText = number;

// functions

const setStars = (number) => {
	numberElem.innerText = number;
}