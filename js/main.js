import { footerHtml } from "../components/footer.js";
import { HeaderHtml } from "../components/header.js";
import { navigationMenuHtml } from "../components/navigation-menu.js";

const header = document.querySelector("#header");
header.innerHTML = HeaderHtml();

const footer = document.querySelector("#footer");
footer.innerHTML = footerHtml();

const navgation = document.querySelector("#bottom-navigation-bar");
navgation.innerHTML = navigationMenuHtml();
