import "./style.css";
import { menu } from "./restaurantMenu.js";
import backImage from "../download.png"

const image = document.createElement("img");
image.src = backImage;

document.body.appendChild(image);

console.log(menu);