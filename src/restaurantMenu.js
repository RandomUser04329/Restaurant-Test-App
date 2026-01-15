//Main Page Div + header
const MenuDiv = document.createElement("div");
MenuDiv.className = "MenuDiv";
const MenuHeader = document.createElement("h1");
MenuHeader.id = "MenuHeader";
MenuHeader.textContent = "Our Menu";

//Menus Divs + Names
const MenuSection = document.createElement("div");
MenuSection.className = "Menus";

const AllDaySection = document.createElement("div");
AllDaySection.className = "AllDayMenuDiv";
    const AllDayBox = document.createElement("div");
    AllDayBox.className = "AllDayMenuBox";
        const AllDayBoxHeader = document.createElement("h1");
        AllDayBoxHeader.id = "AllDayBoxHeader";
        AllDayBoxHeader.textContent = "All Day";
    const AllDayMenuDetails = document.createElement("div");
    AllDayMenuDetails.className = "AllDayMenuDetailsBox";
        const AllDayDetailsPara = document.createElement("p");
        AllDayDetailsPara.id = "AllDayDetailsPara";
    


const SidesDrinksSection = document.createElement("div");
SidesDrinksSection.className = "SidesDrinksMenuDiv"; 
    const SidesBox = document.createElement("div");
    SidesBox.className = "SidesMenuBox";
        const SidesBoxHeader = document.createElement("h1");
        SidesBoxHeader.id = "SidesBoxHeader";
        SidesBoxHeader.textContent = "Sides"
    const SidesMenuDetails = document.createElement("div");
    SidesMenuDetails.className = "SidesMenuDetailsBox";
        const SidesDetailsItems = document.createElement("p");
        SidesDetailsItems.id = "SidesDetailsItems";
        SidesDetailsItems.textContent = 
            "Thick Cut Fries\n" + 
            "Curly Fries\n" + 
            "Fried Pickles\n" + 
            "Stuffed Jalapeno Peppers\n";
        const SidesDetailsPrices = document.createElement("p");
            SidesDetailsPrices.id = "SidesDetailsPrices";
            SidesDetailsPrices.textContent = 
            "$1.29\n" +
            "$1.29\n" + 
            "$1.49\n" + 
            "$1.69\n";

    const DrinksBox = document.createElement("div");
    DrinksBox.className = "DrinksMenuBox";
        const DrinksBoxHeader = document.createElement("h1");
        DrinksBoxHeader.id = "DrinksBoxHeader";
        DrinksBoxHeader.textContent = "Beverages"; 
        const DrinksMenuDetails = document.createElement("div");
        DrinksMenuDetails.className = "DrinksMenuDetailsBox";
            const DrinksDetailsItems = document.createElement("p");
            DrinksDetailsItems.id = "DrinksDetailsItems";
            DrinksDetailsItems.textContent = 
            "Fountain Drink\nUn-Sweet Tea\nSweet Tea\nBudLight\nModelo\nMichelob\nWater"; 
            const DrinksDetailsPrices = document.createElement("p");
            DrinksDetailsPrices.id = "DrinksDetailsPrices";




        
MenuDiv.appendChild(MenuHeader);
MenuDiv.appendChild(MenuSection);
MenuSection.appendChild(AllDaySection);
MenuSection.appendChild(SidesDrinksSection);

AllDaySection.appendChild(AllDayBox);
AllDayBox.appendChild(AllDayBoxHeader);
AllDayBox.appendChild(AllDayMenuDetails);
AllDayMenuDetails.appendChild(AllDayDetailsPara);

SidesDrinksSection.appendChild(SidesBox);
SidesBox.appendChild(SidesBoxHeader);
SidesBox.appendChild(SidesMenuDetails);
SidesMenuDetails.appendChild(SidesDetailsItems);
SidesMenuDetails.appendChild(SidesDetailsPrices);

SidesDrinksSection.appendChild(DrinksBox);
DrinksBox.appendChild(DrinksBoxHeader);
DrinksBox.appendChild(DrinksMenuDetails);
DrinksMenuDetails.appendChild(DrinksDetailsItems);
DrinksMenuDetails.appendChild(DrinksDetailsPrices);



export { 
    MenuDiv
}