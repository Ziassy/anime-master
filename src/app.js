import "regenerator-runtime"; // mengimport regerator run time yang ada di package.json
import "./styles/style.css"; // mengimport style css
import "./script/functions/function.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import show from "./script/view/show.js";
import main from "./script/view/main.js"; // mengimport function main di main.js
import upComing from "./script/view/upcoming.js";
window.load = show();
window.load = upComing();
document.addEventListener("DOMContentLoaded", main);
