const main = () => {
    const theURL = 'https://appdev.itas.ca/~amcdonald/servertime.php';
    const el = document.querySelector('#checkfield');
    const outRec = document.querySelector('#theresult');

    el.addEventListener('blur', async () => {
        const response = await fetch(theURL);
        if (!response.ok) {
            console.error('Error:', error);
        } else {
            const data = await response.text();
            outRec.innerHTML = data;
        }
    });

}




addEventListener('load', main);

