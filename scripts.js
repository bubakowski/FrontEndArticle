const button = document.getElementById("button");
const overlay = document.getElementById("overlay");
button.addEventListener("click", function appear() {
	overlay.style.display === "none"
		? (overlay.style.display = "flex")
		: (overlay.style.display = "none");
});
