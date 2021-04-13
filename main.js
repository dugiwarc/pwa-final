const registerButton = document.querySelector(".register");
const form = document.querySelector("form");

registerButton.addEventListener("click", (evt) => {
	evt.preventDefault();

	const elems = Array.from(form.elements);

	const anyEmptyFields = elems.some((elem) => {
		if (!elem.value) {
			elem.style.border = "1px solid red";
		}
		if (elem.id) return !elem.value;
	});

	if (anyEmptyFields) return;

	let formData = new FormData();

	elems.forEach((item) => {
		formData.append(item.id, item.value);
	});

	formData.append(
		"code",
		Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, "")
			.substr(0, 10)
	);

	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function () {
		console.log(xmlHttp.responseText);
	};

	xmlHttp.open("POST", "server.php");

	xmlHttp.send(formData);

	new Notification("New Message", {
		title: "StBnb",
		body: "Booking has been made",
	});
});
