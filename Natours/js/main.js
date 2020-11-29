const btnTop = document.querySelector("#btnTop");

window.onscroll = () => {
	document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
		? btnTop.classList.add("show")
		: btnTop.classList.remove("show");
};

btnTop.addEventListener("click", () => {
	// cancel if already on top
	if (document.scrollingElement.scrollTop === 0) return;

	const totalScrollDistance = document.scrollingElement.scrollTop;
	let scrollY = totalScrollDistance,
		oldTimestamp = null;

	function step(newTimestamp) {
		if (oldTimestamp !== null) {
			// if duration is 0 scrollY will be -Infinity
			scrollY -= (totalScrollDistance * (newTimestamp - oldTimestamp)) / 1200; //1200: duration
			if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0);
			document.scrollingElement.scrollTop = scrollY;
		}
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
});
