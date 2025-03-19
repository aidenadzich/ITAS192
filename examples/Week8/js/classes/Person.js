export default class Person {
    constructor(firstName, lastName, birthYear, schoolName, degree) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.schoolName = schoolName;
        this.degree = degree;
    }

    getYearsOld(currentYear) {
        return currentYear - this.birthYear;
    }
}

