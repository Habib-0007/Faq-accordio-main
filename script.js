var accordionTitle =
	document.querySelectorAll(
		".accordionTitle"
	);

accordionTitle.forEach(title => {
	var chevron =
		document.createElement("img");
	chevron.src =
		"./assets/images/icon-plus.svg";

	title.appendChild(chevron);
	title.addEventListener(
		"click",
		() => {
			const content =
				title.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
				chevron.src =
					"./assets/images/icon-plus.svg";
				content.style.padding = "0px";
			} else {
				content.style.maxHeight = `${content.scrollHeight + 30}px`;
				content.style.padding =
					"0px 10px";
				chevron.src =
					"./assets/images/icon-minus.svg";
			}
		}
	);
});
