import { provinces } from '../modules/constants.js';

export default class User {
    #firstName;
    #lastName;
    #username;
    #email;
    #phoneNumber;
    #operatingSystem;
    #agreedTerms;
    #provinceCode;
    

    constructor(firstName, lastName, username, email, phoneNumber, operatingSystem, agreedTerms, provinceCode) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#username = username;
        this.#email = email;
        this.#phoneNumber = phoneNumber;
        this.#operatingSystem = operatingSystem;
        this.#agreedTerms = agreedTerms;
        this.#provinceCode = provinceCode;
    }

    getFullName() {
        return `${this.#lastName}, ${this.#firstName}`;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get phoneNumber() {
        return this.#phoneNumber;
    }
    
    get operatingSystem() {
        return this.#operatingSystem;
    }

    get agreedTerms() {
        return this.#agreedTerms;
    }

    getProvinceName() {
        return provinces[this.#provinceCode] || "Unknown Province";
    }

}