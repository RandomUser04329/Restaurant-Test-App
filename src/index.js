import "./style.css";
import { HomeDiv } from "./restaurantHome.js";
import { MenuDiv } from "./restaurantMenu.js";
import { AboutDiv } from "./restaurantAbout.js";

const ContentSection = document.querySelector(".ContentSection");
const HomeButton = document.querySelector("#HomeButton");
const MenuButton = document.querySelector("#MenuButton");
const AboutButton = document.querySelector("#AboutButton");

ContentSection.appendChild(HomeDiv);

HomeButton.addEventListener("click",() => { 
    HomeDiv.style.display = "grid";
    ContentSection.appendChild(HomeDiv);
})