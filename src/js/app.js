import url from "../img/poema.png";
import {width} from "./config.js";
import styles from "../css/style.css";

// FOTO POEMA
const poema = document.getElementById("poema");
let el = document.createElement("img");
el.setAttribute("src", url);
el.setAttribute("width", width);
poema.appendChild(el);

console.log(styles.poema);
poema.classList.add(styles.poema);
