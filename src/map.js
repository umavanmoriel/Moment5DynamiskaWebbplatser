/** 
 * Söker element från DOM med id "search-button"
 * @type {HTMLButtonElement}
*/
const searchButton = document.getElementById("search-button");

/** 
 * Söker input från DOM med id "search-input"
 * @type {HTMLInputElement}
*/
const searchInput = document.getElementById("search-input");

let map;

/** 
 * Skapar och initialiserar google karta 
 * @return {Promise<void>} - returnerar ingenting
*/

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 2,
    mapId: '1ed9e7e3d331969ed37e7f98',
  });

}

/** 
 * Söker plats med google karta när man skriver namnet i input fält 
 * @return {Promise<void>} - uppdaterar kartat och visar plats med markör
*/

async function findPlaces() {
    const { Place } = await google.maps.importLibrary("places");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const textQuery = searchInput.value;
    
    const request = {
        textQuery,
        fields: ['location'],
    };

    const { places } = await Place.searchByText(request);
    
    if (places.length) {
        console.log(places);
        const { LatLngBounds } = await google.maps.importLibrary("core");
        const bounds = new LatLngBounds();
        // Loopa
        places.forEach((place) => {
            const markerView = new AdvancedMarkerElement({
                map,
                position: place.location,
                title: place.displayName,
            });
            bounds.extend(place.location);
            console.log(place);
        });
        map.fitBounds(bounds);
    }
    else {
        console.log('No results');
    }
}

/** 
 * Startar google karta när sidan uppdateras 
*/

initMap();

/** 
 * Anropar funktionen findPlaces när man klickar på knappen searchButton 
*/
searchButton.addEventListener('click', findPlaces);