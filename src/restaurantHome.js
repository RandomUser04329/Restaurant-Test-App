
import BurgerImage from "../images/BurgerImage.jpg";

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
        ImageInfo.src = BurgerImage;
    const AboutParagraphDiv = document.createElement("div");
    AboutParagraphDiv.className = "AboutParagraphDiv";
        const AboutParagraphHeader = document.createElement("h2");
        AboutParagraphHeader.id = "AboutParagraphHeader";
        AboutParagraphHeader.textContent = "About Us"
        const AboutParagraph = document.createElement("p");
        AboutParagraph.id = "InfoDiv-Paragraph";
        AboutParagraph.textContent = "Our Restaurant was started in the idea" + 
        "of being able to serve customers cheeseburgers that" +
        "aren't filled preservatives, and are not cooked" +
        "in harmful oils. As well for the meat being" + 
        "Grass Fed and 100% Ground beef.";

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
DivForAbout.appendChild(AboutParagraphDiv);
AboutParagraphDiv.appendChild(AboutParagraphHeader);
AboutParagraphDiv.appendChild(AboutParagraph);

HomeBoxes.appendChild(HoursDiv);
HomeBoxes.appendChild(LocationDiv);

export { 
    HomeDiv
};