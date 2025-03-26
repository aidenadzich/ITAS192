async function main() {
    const theURL = 'https://appdev.itas.ca/~amcdonald/airplanes.json';
    const outRec = document.querySelector('#theresult');
    const spanTag = document.querySelector('span');

    const response = await fetch(theURL)
    if (!response.ok) {
        console.error('Error:', error);
    } else {
        const data = await response.json();
        outRec.textContent = "Here is the airplane's data: ";
        let outData = "";
        data.forEach(airplane => {
           outData += `Model: ${airplane.model}<br>Manufacturer: ${airplane.manufacturer}<br>Year: ${airplane.year}<br>Capacity: ${airplane.capacity}<br>Max Speed: ${airplane.maxspeed}<br>Max Range: ${airplane.range}<br>Engines: ${airplane.engines}<br><br>`; 
        });
        spanTag.innerHTML = outData;

    }
}



addEventListener('load', main);