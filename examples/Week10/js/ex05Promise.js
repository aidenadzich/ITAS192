const mySearch = new Promise((resolve, reject) => {
    let foundResume = Math.floor(Math.random() * 100);
    const searchResult = foundResume < 50 ? true : false;
    
    if (searchResult) {
        let value = "found the resume";
        resolve(value);
    } else {
        let value = "did not find the resume";
        reject(value);
    }
});

mySearch
.then((result) => console.log(`Interview went well because Lily ${result}`))
.catch((error) => console.log(`Interview did not go well because Lily ${error}`))
.finally(() => console.log(`Everything will be okay in the end`));