import Chamiseul from "./images/Cham-E-Seul.jpeg";
import Chumchurum from "./images/chumchurum.jpeg";
import Makkoli from "./images/makkoli.jpeg";
import Hite from "./images/hite.jpeg";
import OB from "./images/OB.jpeg";

const drinks = () => {
	const content = document.createElement("div");
	content.classList.add("content");

	content.innerHTML = `
    <h3>Drink Menu</h3>
    
    <h4 class="drink-menu">Soju & Rice Wine</h4>
    <ul>
        <li> <img src="${Chamiseul}" alt="chamiseul" class="menu-img" /><strong>Cham-E-Seul</strong>: soju</li>
        <li> <img src="${Chumchurum}" alt="chumchurum" class="menu-img" /><strong>Chumchurum</strong>: soju</li>
        <li><img src="${Makkoli}" alt="makkoli" class="menu-img" /><strong>Makkoli</strong>: unfiltered rice wine</li>
    </ul>
    <h4>Beer</h4>
    <ul>
        <li><img src="${Hite}" alt="stew" class="menu-img" /><strong>Hite</strong>: lager</li>
        <li><img src="${OB}" alt="stew" class="menu-img" /><strong>OB</strong>: pale lager</li>
    </ul>`;

	return content;
};

export default drinks;
