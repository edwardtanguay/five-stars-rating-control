export const setStars = (number) => {
	createStars(number);
	localStorage.setItem('stars', number);
}

