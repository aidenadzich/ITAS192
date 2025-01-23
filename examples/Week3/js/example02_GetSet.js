class Hotel {
    #name;
    #rooms;
    #booked;

    constructor(name, rooms, booked) {
        this.#name = name;
        this.#rooms = rooms;
        this.#booked = booked;
    }

    get name() {
        return (this.#name).toUpperCase();
    }

    get rooms() {
        return this.#rooms;
    }

    get booked() {
        return this.#booked;
    }

    set booked(value) {
        this.#booked = value;
    }
}

const myHotel = new Hotel('Grand Californian', 750, 263);
console.log(myHotel);
console.log(myHotel.name);
console.log(myHotel.rooms);
console.log(myHotel.booked);
myHotel.booked += 10;
console.log(myHotel.booked);
