let records = [
    { id: 1, firstName: "Anita", lastName: "Bath", isStudent: true, age: 19 },
    { id: 2, firstName: "Hugh", lastName: "Jass", isStudent: true, age: 21 },
    { id: 3, firstName: "Paige", lastName: "Turner", isStudent: false, age: 35 },
    { id: 4, firstName: "Justin", lastName: "Case", isStudent: true, age: 20 },
    { id: 5, firstName: "Eileen", lastName: "Dover", isStudent: false, age: 28 },
    { id: 6, firstName: "Al", lastName: "Dente", isStudent: true, age: 22 },
    { id: 7, firstName: "Holly", lastName: "Wood", isStudent: true, age: 18 },
    { id: 8, firstName: "Chris P.", lastName: "Bacon", isStudent: false, age: 31 },
    { id: 9, firstName: "Ima", lastName: "Hogg", isStudent: true, age: 19 },
    { id: 10, firstName: "Ben", lastName: "Dover", isStudent: false, age: 26 },
    { id: 11, firstName: "Sue", lastName: "Flay", isStudent: true, age: 20 },
    { id: 12, firstName: "Robin", lastName: "Banks", isStudent: false, age: 29 }
];

let result = records.find(record => record.id == 5);
console.log(result);

let student = records.find(record => record.age == 35);
console.log(student);