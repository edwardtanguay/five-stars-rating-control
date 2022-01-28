export class StarComponent {
	constructor(document) {
		this.document = document;
		this.starsElem = this.document.querySelector('.stars');
		this.numberElem = this.document.querySelector('.number');
	}

	setStars(number) {
		this.createStars(number);
		localStorage.setItem('stars', number);
	}

	createStars(number) {
		this.starsElem.innerHTML = '';
		for (let i = 1; i <= number; i++) {
			this.starsElem.innerHTML += `<i onclick="setStars(${i})" class="fa fa-star"></i>`;
		}
		for (let i = number + 1; i <= 5; i++) {
			this.starsElem.innerHTML += `<i onclick="setStars(${i})" class="fa fa-star-o"></i>`;
		}
		this.numberElem.innerText = number;
	}

	render() {
		const cachedStars = Number(localStorage.getItem('stars'));
		const number = cachedStars === null ? 3 : cachedStars;
		this.createStars(number);
	}

}

