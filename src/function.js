// Dropdown menu
const menuEl = document.getElementById("menu");
const dropdownEl = document.getElementById("dropdown-menu");

menuEl.addEventListener('click', () => {
    dropdownEl.classList.toggle('show');
    menuEl.classList.toggle('larger');
})

// Initialisering när sidan laddas om
window.onload = init;

// Funktion för att initialisera applikationen och hämta information
function init() {
    processData();
}

//Hämta kurser
async function getCoursesInfo() {
    try {
        const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
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
        const result = await getCoursesInfo();
        console.log('Received data:', result);
        const filterCourses = result.filter(item => item.type === "Kurs");
        let newArray = filterCourses.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 6);
        createChart(newArray);
        console.log(newArray); 
    } catch (error) {
        console.error('Error processing data:', error);
    }
}

function createChart(data) {
    // Se till att elementet med ID 'diagram' finns i DOM
    const ctx = document.getElementById('diagram').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(row => row.name),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.applicantsTotal)
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


  