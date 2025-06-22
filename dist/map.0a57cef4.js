const CONFIGURATION = {
    "locations": [
        {
            "title": "Escondido Grill",
            "address1": "601 Geary St",
            "address2": "San Francisco, CA 94102, USA",
            "coords": {
                "lat": 37.7866,
                "lng": -122.4133
            },
            "placeId": "ChIJ5Sz52pGAhYAR1raOybzuDp8",
            "actions": [
                {
                    "label": "Reserve a table",
                    "defaultUrl": "https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png"
                }
            ]
        }
    ],
    "mapOptions": {
        "center": {
            "lat": 38.0,
            "lng": -100
        },
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 4,
        "zoomControl": true,
        "maxZoom": 17,
        "mapId": ""
    },
    "mapsApiKey": "AIzaSyAnt3iJcGvVBZsrMQ0hRT4T8eQu2sTrN48",
    "capabilities": {
        "input": true,
        "autocomplete": true,
        "directions": false,
        "distanceMatrix": true,
        "details": false,
        "actions": true
    }
};
document.addEventListener('DOMContentLoaded', async ()=>{
    await customElements.whenDefined('gmpx-store-locator');
    const locator = document.querySelector('gmpx-store-locator');
    locator.configureFromQuickBuilder(CONFIGURATION);
});

//# sourceMappingURL=map.0a57cef4.js.map
