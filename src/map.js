const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 2,
    mapId: '1ed9e7e3d331969ed37e7f98',
  });

}

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
        // Loop through and get all the results.
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

initMap();

searchButton.addEventListener('click', findPlaces);