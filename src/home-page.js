const homePage = () => {
	const content = document.createElement("div");
	content.classList.add("content");
	content.innerHTML = `
    <h3>Best Korean Food in Chattanooga!</h3>
	<p>
	Red Bank Korean BBQ offers authentic Korean cuisine with a wide variety
	of dishes all served with traditional panchan. For our BBQ, we cook your
	meats right at your table while you enjoy our selection of stews and
	appitizers. We also offer a drink menue featuring Korean beer and Soju.
	Come in today and treat yourself to the best Korean cuisine in
	Chattanooga (if not Tennessee!). 		
    </p>
    `;
	return content;
};

export default homePage;
