//The Main Box
const HomeDiv = document.createElement("div");
HomeDiv.className = "HomeDiv"; 

//Header Box + Elements
const HeaderDiv = document.createElement("div");
const HomeHeader = document.createElement("h1");
const HomeMiniHeader = document.createElement("h2");

HeaderDiv.className = "HeaderDiv";
HomeHeader.id = "HomeHeader"; 
HomeMiniHeader.id = "HomeMiniHeader";
HomeHeader.textContent = "Bonez";
HomeMiniHeader.textContent = "Burgerz n Friez";

HeaderDiv.appendChild(HomeHeader);
HeaderDiv.appendChild(HomeMiniHeader);

const InfoDiv = document.createElement("div");
InfoDiv.className = "InfoDiv";

const ImageInfo = document.createElement("img");
ImageInfo.id = "InfoDiv-Image";
const AboutParagraph = document.createElement("p");
AboutParagraph.id = "InfoDiv-Paragraph";







HomeDiv.appendChild(HeaderDiv);

export { 
    HomeDiv
};