import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import img from "./media/brand.png";
import "./styles/style.css";
import "./styles/responsive_768px.css";
import "./styles/responsive_576px.css";
import "./scripts/functions/theme-mode.js";
import brand from "./scripts/components/nav-brand.js";
import main from "./scripts/functions/main-app.js";

const navbar = document.querySelector(".navbar");
const navBrand = document.createElement("nav-brand");

navBrand.brandNavbar = brand;
navbar.insertBefore(navBrand, navbar.firstChild);

const imgBanner = document.querySelector(".brand-banner");
imgBanner.setAttribute("src", `${img}`);

main();
