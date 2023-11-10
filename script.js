var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.innerHTML = input.value;
	ul.appendChild(li);
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.classList.add("btn");
	li.appendChild(btn);
	input.value = "";
}

function addListAfterClick() {
	if (input.value === "") {
		alert("You must write something!");
	} else {
		createListElement();
		saveData();
	}
}

function addListAfterKeypress(event) {
	if (input.value === "" && event.key === "Enter") {
		alert("You must write something!");
	} else if (input.value.length > 0 && event.key === "Enter") {
		createListElement();
		saveData();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
		saveData();
	} else if (e.target.tagName === "BUTTON") {
		e.target.parentElement.remove();
		saveData();
	}
});


function saveData() {
	localStorage.setItem("data", ul.innerHTML);
}


function showItem() {
	ul.innerHTML = localStorage.getItem("data");
}

showItem();
