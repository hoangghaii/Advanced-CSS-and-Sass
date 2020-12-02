const toggleModal = (element1, element2, element3) => {
	document.querySelector(element3).classList.remove("toggle");
	document.querySelector(element2).classList.remove("toggle");
	document.querySelector(element1).classList.toggle("toggle");
};
