// importing images
import Bulgogi from "./images/bulgogi.jpeg";
import Galbi from "./images/galbi.jpeg";
import Dwaejigogi from "./images/dwaejigogi.jpeg";
import Dwaengjangjigae from "./images/dwaengjang-jigae.jpeg";
import Kimchijigae from "./images/kimchi-jigae.jpeg";
import Soondubujigae from "./images/soondubu-jiggae.jpg";

const menu = () => {
	/* <div class="content">
				<h3>Menu</h3>
				<p>* All orders come with a variety of side dishes/ panchan</p>
				<h4>Gogi/ Meats</h4>
				<ul>
					<li><img src="/src/images/bulgogi.jpeg" alt="bulgogi" /> Bulgogi</li>
					<li>Kalbi</li>
					<li>Twaejigogi</li>
				</ul>
				<h4>Jigae/ Stews</h4>
				<ul>
					<li>Dwaengjang Jigae</li>
					<li>Kimchi Jigae</li>
					<li>Soondubu Jigae</li>
				</ul>
			</div> */
	const content = document.createElement("div");
	content.classList.add("content");

	content.innerHTML = `
    <h3>Menu</h3>
    <p>* All orders come with a variety of side dishes/ panchan</p>
    <h4>Gogi/ Meats</h4>
    <ul>
        <li> <img src="${Bulgogi}" alt="bulgogi" class="menu-img" />Bulgogi</li>
        <li> <img src="${Galbi}" alt="galbi" class="menu-img" />Galbi</li>
        <li><img src="${Dwaejigogi}" alt="dwaejigogi" class="menu-img" />Dwaejigogi</li>
    </ul>
    <h4>Jigae/ Stews</h4>
    <ul>
        <li><img src="${Dwaengjangjigae}" alt="stew" class="menu-img" />Dwaengjang Jigae</li>
        <li><img src="${Kimchijigae}" alt="stew" class="menu-img" />Kimchi Jigae</li>
        <li><img src="${Soondubujigae}" alt="stew" class="menu-img" />Soondubu Jigae</li>
    </ul>`;

	return content;
};

export default menu;
