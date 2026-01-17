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
HomeHeader.textContent = "";
HomeMiniHeader.textContent = "";

HeaderDiv.appendChild(HomeHeader);
HeaderDiv.appendChild(HomeMiniHeader);


//Restaurant Divs for repeating rows w/o header
const HomeBoxes = document.createElement("div");
HomeBoxes.className = "RestaurantDivs";

//About the Restaurant Div + Elements
const AboutDiv = document.createElement("div");
AboutDiv.className = "AboutDiv";
    const DivForAbout = document.createElement("div");
    DivForAbout.className = "DivForAbout";
        const ImageInfo = document.createElement("img");
        ImageInfo.id = "InfoDiv-Image";
        const AboutParagraph = document.createElement("p");
        AboutParagraph.id = "InfoDiv-Paragraph";

//Restaurant Hours Div + Elements

const HoursDiv = document.createElement("div");
HoursDiv.className = "HoursDiv";


//Restaurant Location Div + Elements

const LocationDiv = document.createElement("div");
LocationDiv.className = "LocationDiv"; 


HomeDiv.appendChild(HeaderDiv);
HomeDiv.appendChild(HomeBoxes);
HeaderDiv.appendChild(HomeHeader);
HeaderDiv.appendChild(HomeMiniHeader);

HomeBoxes.appendChild(AboutDiv);
AboutDiv.appendChild(DivForAbout);
DivForAbout.appendChild(ImageInfo);
DivForAbout.appendChild(AboutParagraph)
HomeBoxes.appendChild(HoursDiv);
HomeBoxes.appendChild(LocationDiv);

export { 
    HomeDiv
};