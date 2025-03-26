const main = () => {
    const theURL = 'https://appdev.itas.ca/~amcdonald/servertime.php';
    const el = document.querySelector('#checkfield');
    const outRec = document.querySelector('#theresult');

    el.addEventListener('blur', () => {
        fetch(theURL)
        .then(response => response.text())
        .then(data => {
            outRec.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

}




addEventListener('load', main);

