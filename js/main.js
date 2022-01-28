const starsElem = document.querySelector('.stars');

const number = 1;

for (let i = 1; i <= number; i++) {
	starsElem.innerHTML += '<i class="fa fa-star"></i>';
}
for (let i = 1; i <= 5 - number; i++) {
	starsElem.innerHTML += '<i class="fa fa-star-o"></i>';
}

/*

			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star-o"></i>
			<i class="fa fa-star-o"></i>

*/