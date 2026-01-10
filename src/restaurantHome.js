import BurgerImage from "../images/BurgerPic1.jpg";

const HomeDiv = document.createElement("div");
HomeDiv.className = "HomeDiv"; 

const HomeHeader = document.createElement("h1");
const HomeImage = document.createElement("img");
HomeImage.id = "HomeBurgerImage";
HomeHeader.id = "HomeHeader"; 

HomeHeader.textContent = "Bonez";
HomeHeader.style.fontFamily = "MyFont1";
HomeImage.src = BurgerImage;
HomeDiv.appendChild(HomeHeader); 
HomeDiv.appendChild(HomeImage);

export { 
    HomeDiv
};