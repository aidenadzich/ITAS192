function main() {
    const theURL = 'https://appdev.itas.ca/~amcdonald/airplanes.json';
    const outRec = document.querySelector('#theresult');
    const spanTag = document.querySelector('span');

    fetch(theURL)
    .then(response => response.json())
    .then(data => {
        outRec.textContent = "Here is the airplane's data: ";

        let outData = "";
        data.forEach(airplane => {
           outData += `Model: ${airplane.model}<br>Manufacturer: ${airplane.manufacturer}<br>Year: ${airplane.year}<br>Capacity: ${airplane.capacity}<br>Max Speed: ${airplane.maxspeed}<br>Max Range: ${airplane.maxrange}<br>Engines: ${airplane.engines}<br><br>`; 
        });

        spanTag.innerHTML = outData;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



addEventListener('load', main);