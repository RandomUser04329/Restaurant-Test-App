import "./style.css";
import { HomeDiv } from "./restaurantHome.js";
import { MenuDiv } from "./restaurantMenu.js";
import { ContactDiv } from "./restaurantContact.js";

const ContentSection = document.querySelector(".ContentSection");
const HomeButton = document.querySelector("#HomeButton");
const MenuButton = document.querySelector("#MenuButton");
const ContactButton = document.querySelector("#ContactButton");

function ShowPage(div) {
    const PageDivs = document.querySelectorAll(".ContentSection > div");

    PageDivs.forEach(div => { 
        ContentSection.removeChild(div);
    });

    if (div) { 
        ContentSection.appendChild(div);
    }
}

function ButtonStyles(btn) {
    const NavButtons = document.querySelectorAll(".NavMenu > button");

    NavButtons.forEach(btn => { 
        btn.classList.remove("ActiveButton");
        btn.style.backgroundColor = "rgb(255, 255, 255)";
    });

    if (btn) { 
        btn.classList.add("ActiveButton");
        btn.style.backgroundColor = "rgb(35, 35, 35)";
    }
}
    
HomeButton.addEventListener("click", () => {
    ShowPage(HomeDiv);
    ButtonStyles(HomeButton);
})

MenuButton.addEventListener("click", () => {
    ShowPage(MenuDiv);
    ButtonStyles(MenuButton);
})

ContactButton.addEventListener("click", () => { 
    ShowPage(ContactDiv);
    ButtonStyles(ContactButton);
});


//ForTestingPurposes
//ShowPage(MenuDiv);
ShowPage(HomeDiv);
ButtonStyles(HomeButton);