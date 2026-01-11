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


//About the Restaurant Div + Elements
const AboutDiv = document.createElement("div");
AboutDiv.className = "AboutDiv";
const ImageInfo = document.createElement("img");
ImageInfo.id = "InfoDiv-Image";
const AboutParagraph = document.createElement("p");
AboutParagraph.id = "InfoDiv-Paragraph";

//Restaurant Hours Div + Elements

const HoursDiv = document.createElement("div");
HoursDiv.className = "HoursDiv";




//Restaurant Location Div + Elements






HomeDiv.appendChild(HeaderDiv);
HomeDiv.appendChild(AboutDiv);
HomeDiv.appendChild(HoursDiv);

export { 
    HomeDiv
};