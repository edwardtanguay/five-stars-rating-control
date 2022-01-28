const starsElem = document.querySelector('.stars');
const numberElem = document.querySelector('.number');

const number = 3;

// stars
for (let i = 1; i <= number; i++) {
	starsElem.innerHTML += '<i class="fa fa-star"></i>';
}
for (let i = 1; i <= 5 - number; i++) {
	starsElem.innerHTML += '<i class="fa fa-star-o"></i>';
}

// number
numberElem.innerText = number;