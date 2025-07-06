/** 
 * Söker element från DOM med id "menu"
 * @type {HTMLElement}
*/

const menuEl = document.getElementById("menu");

/** 
 * Söker element från DOM med id "dropdown-menu"
 * @type {HTMLElement}
*/

const dropdownEl = document.getElementById("dropdown-menu");

/**
 * Visar dropdown menu när man klickar på menuEl
 * @returns {void} - returnerar ingenting
 */

menuEl.addEventListener('click', () => {
    dropdownEl.classList.toggle('show');
    menuEl.classList.toggle('larger');
})
