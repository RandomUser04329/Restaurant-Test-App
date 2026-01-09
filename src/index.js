import "./style.css";
import { menu } from "./restaurantMenu.js";
import BurgerImage from "../images/BurgerPic1.jpg"

const image = document.createElement("img");
const titleHeader = document.createElement("h1");

titleHeader.textContent = "Bonez!";
image.src = BurgerImage;

const ContentSection = document.querySelector(".ContentSection");

ContentSection.appendChild(titleHeader);
//ContentSection.appendChild(image);
console.log(menu);