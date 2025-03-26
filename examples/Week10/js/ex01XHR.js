const main = () => {
    const theURL = 'https://appdev.itas.ca/~amcdonald/servertime.php';
    const el = document.querySelector('#checkfield');
    const outRec = document.querySelector('#theresult');

    el.addEventListener('blur', () => {
        try {

            let xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', () => {
               if(xhr.readyState === 4 && xhr.status === 200) {
                    outRec.textContent = xhr.responseText;
               } else if(xhr.status !== 200) {
                    outRec.textContent = 'Waiting for response...';
                    console.error(`Error: ${xhr.status}`);
               }
            });
            xhr.open('GET', theURL, true);
            xhr.send();


        } catch(e) {
            console.error(e);
        }
    });

}




addEventListener('load', main);

