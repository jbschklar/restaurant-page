const pageLoad = function (content) {
	const container = document.getElementById("container");
	container.innerHTML = "";
	container.appendChild(content);
};

export default pageLoad;
