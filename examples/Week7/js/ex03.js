if (document.cookie) {
    console.log(document.cookie);
    let cookieArray = document.cookie.split("; ");
    console.log(cookieArray);
    let lastVisitCookie = cookieArray.find(el => el.startsWith("lastVisit"));
    let equalPos = lastVisitCookie.indexOf("=") + 1;
    let lastVisit = decodeURIComponent(lastVisitCookie.substring(equalPos));
    console.log(`You last visited: ${lastVisit}`);
    let jsonValues = new Object();
    for (let i = 0; i < cookieArray.length; i++) {
        let equalPos = cookieArray[i].search("="); // search or indexOf work the same here
        let cookieValue = decodeURIComponent(cookieArray[i].substring(equalPos + 1));
        let cookieName = cookieArray[i].substring(0, equalPos);
        console.log(`Name ${cookieName}: Value ${cookieValue}`);
        jsonValues[cookieName] = cookieValue;
    }
    console.log(jsonValues);

} else {
    console.log(`This is your first visit. Yay!`);
}


let now = new Date();
let weekday = now.getDay();
let day = now.getDate();
let year = now.getFullYear();
let month = now.getMonth();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let thisVisit = `${days[weekday]} ${month+1}/${day}/${year} at ${hours}:${minutes}:${seconds}`

let expireDate = new Date();
expireDate.setMonth(expireDate.getMonth() + 1);

document.cookie = `stageManager=${encodeURIComponent("Lily Wilson")}; expires=${expireDate.toUTCString()}`;
document.cookie = `lastVisit=${encodeURIComponent(thisVisit)}; expires=${expireDate.toUTCString()}`;
