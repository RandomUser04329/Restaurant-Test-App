//Main Page Div + header
const MenuDiv = document.createElement("div");
MenuDiv.className = "MenuDiv";
const MenuHeader = document.createElement("h1");
MenuHeader.id = "MenuHeader";
MenuHeader.textContent = "Our Menu's"

//Menus Divs + Names
const MenuSection = document.createElement("div");
MenuSection.className = "Menus";
const LunchSection = document.createElement("div");
LunchSection.className = "LunchMenuDiv";
const DinnerSection = document.createElement("div");
DinnerSection.className = "DinnerMenuDiv"; 











MenuDiv.appendChild(MenuHeader);
MenuDiv.appendChild(MenuSection);
MenuSection.appendChild(LunchSection);
MenuSection.appendChild(DinnerSection);


export { 
    MenuDiv
}