const pageLoad = function (content) {
	const container = document.getElementById("container");
	container.appendChild(content);
	console.log(container);
};

export default pageLoad;
