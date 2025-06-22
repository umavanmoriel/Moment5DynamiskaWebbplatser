// Dropdown menu
const menuEl = document.getElementById("menu");
const dropdownEl = document.getElementById("dropdown-menu");

menuEl.addEventListener('click', () => {
    dropdownEl.classList.toggle('show');
    menuEl.classList.toggle('larger');
})


/*
//Hämta kurser
async function getMapInfo() {
    try {
        const response = await fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyAnt3iJcGvVBZsrMQ0hRT4T8eQu2sTrN48&callback=console.debug&libraries=maps,marker&v=beta');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

// Användning av den asynkrona funktionen
async function processData() {
    try {
        const result = await getMapInfo();
        console.log('Received data:', result);
        coursesInfoDisplay(result);
        window.courses = result;
    } catch (error) {
        console.error('Error processing data:', error);
    }
}  
*/