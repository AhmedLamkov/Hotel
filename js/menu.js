const menuBody = document.querySelector(".menu");

menuBody.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest(".menu_button")) {
		menuBody.classList.toggle("js-active");
	}
	if (!event.target.closest(".menu")) {
		menuBody.classList.remove("js-active");
	}
}
