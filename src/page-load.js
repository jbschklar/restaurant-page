// function to load each page's contnet returned from module functions called mby tab clicks
const pageLoad = function (content) {
	const container = document.getElementById("container");
	container.innerHTML = "";
	container.appendChild(content);
};

export default pageLoad;
