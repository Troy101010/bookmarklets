if (typeof invertimg == "undefined") {
	var invertimg = document.createElement("style");
	invertimg.innerHTML = "img,video,embed,object{filter:invert(100%)}";
	document.body.appendChild(invertimg);
}
else {
	invertimg.remove();
	invertimg = undefined;
}
