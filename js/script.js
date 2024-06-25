import MenuMobile from "./module/MenuMobile.js";
import DarkMode from "./module/DarkMode.js";
import LinkSmooth from "./module/linksSmooth.js";

const menu = new MenuMobile('.toggle','.list-menu');

menu.start()

const darkMode = new DarkMode('dark-mode','icon')

darkMode.init()


const link = new LinkSmooth('.list-menu li a');

link.init()

const footerLink = new LinkSmooth('.list-footer-menu li a');

footerLink.init()