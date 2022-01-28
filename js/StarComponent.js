export class StarComponent {

	constructor(document) {
		this.document = document;
		this.starsElem = this.document.querySelector('.stars');
		this.numberElem = this.document.querySelector('.number');
		this.numberOfStars = 3;
	}

	setStars = (numberOfStars) => {
		this.numberOfStars = numberOfStars;
		this.createStars();
		localStorage.setItem('numberOfStars', this.numberOfStars);
	}

	createStars() {
		this.starsElem.innerHTML = '';
		for (let i = 1; i <= 5; i++) {
			const starElem = document.createElement('i');
			if (i <= this.numberOfStars) {
				starElem.classList.add('fa', 'fa-star');
			} else {
				starElem.classList.add('fa', 'fa-star-o');
			}
			starElem.addEventListener('click', () => this.setStars(i));
			this.starsElem.appendChild(starElem);
		}
		this.numberElem.innerText = this.numberOfStars;
	}

	render() {
		const cachedStars = Number(localStorage.getItem('numberOfStars'));
		this.numberOfStars = cachedStars === null ? 3 : cachedStars;
		this.createStars();
	}

	static instantiate(document) {
		return new StarComponent(document);
	}

}