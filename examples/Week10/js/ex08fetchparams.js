const main = () => {
    const theURL = new URL('https://echo.free.beeceptor.com/');
    const el = document.querySelector('#checkname');
    const outRec = document.querySelector('#theresult');
    let queryString;

    el.addEventListener('blur', () => {
        queryString = `?query=${el.value}`;
        theURL.search = new URLSearchParams(queryString);
        fetch(`${theURL}`)
        .then(response => response.json())
        .then(text => {
            outRec.textContent = text.parsedQueryParams.query;
            console.log(text.parsedQueryParams);
        })
        .catch(error => console.error('Error:', error));
    });
}

addEventListener('load', main);