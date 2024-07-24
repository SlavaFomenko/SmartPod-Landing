document.addEventListener("DOMContentLoaded", function() {
	const burgerIcon = document.getElementById("burger-icon");
	const burgerMenu = document.getElementById("burger-menu");
	const closeBtn = document.getElementById('close-btn')
	burgerIcon.addEventListener("click", function() {
			burgerMenu.classList.toggle("burger-menu-active");
			burgerIcon.classList.toggle("active");
	});
	closeBtn.addEventListener("click", function() {
		burgerMenu.classList.toggle("burger-menu-active");
		burgerIcon.classList.toggle("active");
	});
});
