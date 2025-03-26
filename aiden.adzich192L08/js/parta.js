const main = () => {
    const theURL = 'https://appdev.itas.ca/~amcdonald/192lab08/cars.json';
    const outRec = document.querySelector('#theresult');


    fetch(theURL)
    .then(response => response.text())
    .then(data => {
        let cars = JSON.parse(data);
        
        cars.sort((a, b) => {
            let makeComparison = a.make.localeCompare(b.make);
            if (makeComparison !== 0) {
                return makeComparison;
            }
            return a.model.localeCompare(b.model);
        });

        cars.forEach(car => {
            
            outRec.innerHTML += `
            <div class="grid grid-cols-6 gap-0 text-gray-300 p-4 border-b border-gray-600">
                <div class="text-center border-r border-gray-600">${car.vin}</div>
                <div class="text-center border-r border-gray-600">${car.make}</div>
                <div class="text-center border-r border-gray-600">${car.model}</div>
                <div class="text-center border-r border-gray-600">${car.year}</div>
                <div class="text-center border-r border-gray-600">${car.colour}</div>
                <div class="text-center border-gray-600">${car.country}</div>
            </div>`;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
    

}




addEventListener('load', main);

