var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li")
var deleteBtns = document.getElementsByClassName("delete")


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var addedBtn = document.createElement("BUTTON")
	addedBtn.innerHTML = "Delete"
	addedBtn.addEventListener("click", removeParent)
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", addDoneClassAfterClick)
	li.appendChild(addedBtn)
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDoneClassAfterClick(event) {
	event.target.classList.toggle("done")
}

function removeParent(event) {
	event.target.parentNode.remove()
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lis.forEach(node => {
	node.addEventListener("click", addDoneClassAfterClick)
})

for (let i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", removeParent)	
}
