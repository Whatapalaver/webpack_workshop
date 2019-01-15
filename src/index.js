import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from './image.js';
import iconUrl from '../icon.jpg'

import css from "./footer.css";
import buttonStyles from "./button.css";

const icon = makeImage(iconUrl)
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(icon);
document.body.appendChild(footer);
