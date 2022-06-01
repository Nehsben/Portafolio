var i = 0;
var titleText = [
	"Nahuel Benitez", "Nahuel Benite", "Nahuel Benit", "Nahuel Beni", "Nahuel Ben", "Nahuel ",
	"Na", "Nah", "Nahu", "Nahue", "Nahuel", "Nahuel B", "Nahuel Be", "Nahuel Ben", "Nahuel Beni", "Nahuel Benitez"
];

if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 250);
}

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[i++ % titleText.length];
}



