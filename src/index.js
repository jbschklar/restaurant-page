"use strict";
import "./style.css";

import Banner from "./korean-bbq-banner.jpg";
import homePage from "./home-page.js";
import pageLoad from "./page-load.js";
import menu from "./menu.js";
import drinks from "./drinks";

const tabs = document.querySelectorAll(".tabs");

// load homepage initially
pageLoad(homePage());

// eventlisteners for tabs
tabs.forEach((tab) => {
	tab.addEventListener("click", (e) => {
		const tab = e.target;
		if (tab.classList.contains("home")) pageLoad(homePage());
		if (tab.classList.contains("menu")) pageLoad(menu());
		if (tab.classList.contains("drinks")) pageLoad(drinks());
	});
});
