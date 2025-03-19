import Person from "./classes/Person.js";

let student1 = new Person('Lily', 'Wilson', 2004, 'CCPA', 'B. FA');
let student2 = new Person('Aiden', 'Adzich', 2006, 'VIU', 'WMD Diploma');

console.log(`First Student name is ${student1.firstName} ${student1.lastName}`);
console.log(`Second student was born ${student2.getYearsOld(2025)} years ago`);
