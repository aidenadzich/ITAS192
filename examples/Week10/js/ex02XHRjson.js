const main = () => {
    const theURL = 'https://reqres.in/api/users/3';
    const outRec = document.querySelector('#theresult');
    const spanTag = document.querySelector('span');

    try {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState === 4 && xhr.status === 200) {

                let resp = JSON.parse(xhr.responseText);
                let data = resp.data;
                console.log(data);
                outRec.textContent = "Here is the person's data: ";

                let outVal = `Name: ${data.first_name} ${data.last_name}<br>Email: ${data.email}<br>Image: <img src="${data.avatar}" alt="avatar">`;

                spanTag.innerHTML = outVal;

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

}




addEventListener('load', main);

