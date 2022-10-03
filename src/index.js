import loadHome from "./pageModule";
import loadMenu from "./menuModule";

loadHome();

const navHome = document.getElementById('home');
const navMenu = document.getElementById('menu');
const navContact = document.getElementById('contact');

navHome.addEventListener('click', loadHome)
navMenu.addEventListener('click', loadMenu)
// navContact.addEventListener('click', handleNavClick)

