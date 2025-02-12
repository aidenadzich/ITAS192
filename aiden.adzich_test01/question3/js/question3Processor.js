// JavaScript Document
const $$ = (id) => document.querySelector(id);

let qString= location.search;
$$("#qString").textContent = qString;

qString = qString.substring(1);

while (qString.indexOf("+") !== -1) {
	qString = qString.replace("+", " ");
}
let qArray = qString.split("&");

let values = [];
for (let i=0; i < qArray.length; ++i) {
	let equalPos = qArray[i].search("=") ;
	let keyVal = qArray[i].substring(0,equalPos);
	let dataVal = qArray[i].substring(equalPos+1);
	dataVal = decodeURIComponent(dataVal);
	values[keyVal] = dataVal;
}

$$("#qUsername").textContent = values["username"];
$$("#qUserId").textContent = values["userId"];
$$("#qLicense").textContent = values["license"];
$$("#qLevel").textContent = values["level"];

