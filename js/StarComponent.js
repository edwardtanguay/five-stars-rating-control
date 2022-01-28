export class StarComponent {

	constructor(document, numberOfStars = 3) {
		this.document = document;
		this.contentElem = this.document.querySelector('.content');
		this.starControlElem = this.createDivWithClassNameAndAppend('starControl', this.contentElem);
		this.starsElem = this.createDivWithClassNameAndAppend('stars', this.starControlElem);
		this.numberElem = this.createDivWithClassNameAndAppend('number', this.starControlElem);
		this.numberOfStars = numberOfStars;
	}

	createDivWithClassNameAndAppend(className, parentElem) {
		const div = this.createDivWithClassName(className);
		parentElem.appendChild(div);
		return div;
	}

	createDivWithClassName(className) {
		const div = document.createElement('div');
		div.classList.add(className);
		return div;
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

	static instantiate(document) {
		const cachedStars = Number(localStorage.getItem('numberOfStars'));
		const numberOfStars = cachedStars === 0 ? 3 : cachedStars;
		const starComponent = new StarComponent(document, numberOfStars);
		starComponent.createStars();
	}

}