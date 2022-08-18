// importing images
import Bulgogi from "./images/bulgogi.jpeg";
import Galbi from "./images/galbi.jpeg";
import Dwaejigogi from "./images/dwaejigogi.jpeg";
import Dwaengjangjigae from "./images/dwaengjang-jigae.jpeg";
import Kimchijigae from "./images/kimchi-jigae.jpeg";
import Soondubujigae from "./images/soondubu-jiggae.jpg";

const menu = () => {
	const content = document.createElement("div");
	content.classList.add("content");

	content.innerHTML = `
    <h3>Menu</h3>
    <p>* All orders come with a variety of side dishes/ panchan</p>
    <h4>Gogi/ Meats</h4>
    <ul>
        <li> <img src="${Bulgogi}" alt="bulgogi" class="menu-img" /><strong>Bulgogi</strong>: marinated beef</li>
        <li> <img src="${Galbi}" alt="galbi" class="menu-img" /><strong>Galbi</strong>: beef short ribs</li>
        <li><img src="${Dwaejigogi}" alt="dwaejigogi" class="menu-img" /><strong>Dwaejigogi</strong>: marinated pork</li>
    </ul>
    <h4>Jigae/ Stews</h4>
    <ul>
        <li><img src="${Dwaengjangjigae}" alt="stew" class="menu-img" /><strong>Dwaengjang Jigae</strong>: fermented soybean stew</li>
        <li><img src="${Kimchijigae}" alt="stew" class="menu-img" /><strong>Kimchi Jigae</strong>: kimchi stew</li>
        <li><img src="${Soondubujigae}" alt="stew" class="menu-img" /><strong>Soondubu Jigae</strong>: spicey tofu stew</li>
    </ul>`;

	return content;
};

export default menu;
