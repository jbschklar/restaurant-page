const homePage = () => {
	// <div id="container">
	// 	<div class="content">
	// 		<h3>Best Korean Food in Chattanooga!</h3>
	// 		<p>
	// Red Bank Korean BBQ offers authentic Korean cuisine with a wide variety
	// of dishes all served with traditional panchan. For our BBQ, we cook your
	// meats right at your table while you enjoy our selection of stews and
	// appitizers. We also offer a drink menue featuring Korean beer and Soju.
	// Come in today and treat yourself to the best Korean cuisine in
	// Chattanooga (if not Tennessee!).
	// 		</p>
	// 	</div>
	// </div>;
	const content = document.createElement("div");
	content.classList.add("content");
	const title = document.createElement("h3");
	title.textContent = "Best Korean Food in Chattanooga!";
	const description = document.createElement("p");
	description.textContent = `Red Bank Korean BBQ offers authentic Korean cuisine with a wide variety
    of dishes all served with traditional panchan. For our BBQ, we cook your
    meats right at your table while you enjoy our selection of stews and
    appitizers. We also offer a drink menue featuring Korean beer and Soju.
    Come in today and treat yourself to the best Korean cuisine in
    Chattanooga (if not Tennessee!).`;
	content.appendChild(title);
	content.appendChild(description);
	return content;
};

export default homePage;
