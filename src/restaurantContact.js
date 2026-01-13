const ContactDiv = document.createElement("div");
ContactDiv.className = "ContactDiv";
const ContactHeader = document.createElement("h1");
ContactHeader.id = "ContactHeader";
ContactHeader.textContent = "Our Contact's";

const ContactMainDiv = document.createElement("div");
ContactMainDiv.className = "ContactMainDiv";

const PhoneContactDiv = document.createElement("div");
PhoneContactDiv.className = "PhoneContactDiv";
const PhoneContactHeader = document.createElement("h1");

const OrderHereDiv = document.createElement("div");
OrderHereDiv.className = "OrderHereDiv";
const OrderHeader = document.createElement("h1");



ContactDiv.appendChild(ContactHeader);
ContactDiv.appendChild(ContactMainDiv);

ContactMainDiv.appendChild(PhoneContactDiv);
ContactMainDiv.appendChild(OrderHereDiv);

export {
    ContactDiv
}