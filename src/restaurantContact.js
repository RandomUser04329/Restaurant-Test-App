import TikTokLogo from "../images/TikTokLogo.png";
import InstagramLogo from "../images/InstagramLogo.png";

//Main Page Boxes + header
const ContactDiv = document.createElement("div");
    ContactDiv.className = "ContactDiv";
    const ContactHeader = document.createElement("h1");
        ContactHeader.id = "ContactHeader";
        ContactHeader.textContent = "Contact us";

const ContactMainDiv = document.createElement("div");
    ContactMainDiv.className = "ContactMainDiv";

//Phone Boxes + Headers
const PhoneContactDiv = document.createElement("div");
    PhoneContactDiv.className = "PhoneContactDiv";
    const ContactBox = document.createElement("div"); 
        ContactBox.id = "PhoneBox"; 
    const PhoneContactHeader = document.createElement("h1");
        PhoneContactHeader.id = "PhoneContactHeader";
        PhoneContactHeader.textContent = "Phone Contact:"
    const PhoneContactPara = document.createElement("p");
        PhoneContactPara.id = "PhonePara";
        PhoneContactPara.textContent = "555-555-5555";
    const EmailContactHeader = document.createElement("h1");
        EmailContactHeader.id = "EmailHeader";
        EmailContactHeader.textContent = "Email Contact:";
    const EmailContactPara = document.createElement("p");
        EmailContactPara.id = "EmailPara";
        EmailContactPara.textContent = "FakeEmail@Hotmail.com"


//Social Media boxes + header
const OrderHereDiv = document.createElement("div");
    OrderHereDiv.className = "OrderHereDiv";
    const OrderBox = document.createElement("div");
        OrderBox.id = "OrderBox";
    const OrderHeader = document.createElement("h1");
        OrderHeader.id = "OrderHeader";
        OrderHeader.textContent = "Follow our Socials!"
//Instagram data
    const InstaHeader = document.createElement("h1");
        InstaHeader.id = "InstaHeader";
        InstaHeader.textContent = "Instagram:"
    const InstaLogo = document.createElement("img");
        InstaLogo.src = InstagramLogo;
        InstaLogo.id = "InstaLogo";
    const InstaPara = document.createElement("p");
        InstaPara.id = "InstaPara";
        InstaPara.textContent = "TheRealBonezBurgerz"
//Tik tok Data
    const TikTokHeader = document.createElement("h1");
        TikTokHeader.id = "TikTokHeader";
        TikTokHeader.textContent = "TikTok:"
    const TTLogo = document.createElement("img");
        TTLogo.src = TikTokLogo
        TTLogo.id = "TikTokLogo";
    const TikTokPara = document.createElement("p");
        TikTokPara.id = "TikTokPara";
        TikTokPara.textContent = "TheRealBonezBurgerz"



ContactDiv.appendChild(ContactHeader);
ContactDiv.appendChild(ContactMainDiv);

ContactMainDiv.appendChild(PhoneContactDiv);
ContactMainDiv.appendChild(OrderHereDiv);

PhoneContactDiv.appendChild(ContactBox);
ContactBox.appendChild(PhoneContactHeader);
ContactBox.appendChild(PhoneContactPara);
ContactBox.appendChild(EmailContactHeader);
ContactBox.appendChild(EmailContactPara);

OrderHereDiv.appendChild(OrderBox);
OrderBox.appendChild(OrderHeader);

OrderBox.appendChild(InstaHeader);
OrderBox.appendChild(InstaPara);
InstaPara.appendChild(InstaLogo);

OrderBox.appendChild(TikTokHeader);
OrderBox.appendChild(TikTokPara);
TikTokPara.appendChild(TTLogo);


export {
    ContactDiv
}