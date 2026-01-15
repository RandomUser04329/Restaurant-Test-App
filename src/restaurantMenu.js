//Main Page Div + header
const MenuDiv = document.createElement("div");
MenuDiv.className = "MenuDiv";
const MenuHeader = document.createElement("h1");
MenuHeader.id = "MenuHeader";
MenuHeader.textContent = "Our Menu"

//Menus Divs + Names
const MenuSection = document.createElement("div");
MenuSection.className = "Menus";

const AllDaySection = document.createElement("div");
AllDaySection.className = "AllDayMenuDiv";
    const AllDayBox = document.createElement("div");
    AllDayBox.className = "AlldayMenuBox";
        const AllDayBoxHeader = document.createElement("h1");
        AllDayBoxHeader.id = "AllDayBoxHeader";
        AllDayHeader.textContent = "All Day";
    const AllDayMenuDetails = document.createElement("div");
    AllDayMenuDetails.className = "AllDayMenuDetailsBox";
        const AllDayDetailsPara = document.createElement("p");
        AllDayDetailsPara.id = "AllDayDetailsPara";
    


const BeveragesSection = document.createElement("div");
BeveragesSection.className = "BeveragesMenuDiv"; 
    const BeveragesBox = document.createElement("div");
    BeveragesBox.className = "BeveragesMenuBox";
        const BeveragesBoxHeader = document.createElement("h1");
        BeveragesBoxHeader.id = "BeveragesBoxHeader";
    const BeveragesMenuDetails = document.createElement("div");
    BeveragesMenuDetails.className = "BeveragesrMenuDetailsBox";
        const BeveragesDetailsPara = document.createElement("p");
        BeveragesDetailsPara.id = "BeveragesDetailsPara";

        
MenuDiv.appendChild(MenuHeader);
MenuDiv.appendChild(MenuSection);
MenuSection.appendChild(AllDaySection);
MenuSection.appendChild(BeveragesSection);

AllDaySection.appendChild(AllDayBox);
AllDayBox.appendChild(AllDayBoxHeader);
AllDayBox.appendChild(AllDayMenuDetails);
AllDayMenuDetails.appendChild(AllDayDetailsPara);

BeveragesSection.appendChild(BeveragesBox);
BeveragesBox.appendChild(BeveragesBoxHeader);
BeveragesBox.appendChild(BeveragesMenuDetails);
BeveragesMenuDetails.appendChild(BeveragesDetailsPara);



export { 
    MenuDiv
}