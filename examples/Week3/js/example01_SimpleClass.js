// Class declaration
class Hotel {
    name;
    rooms;
    booked;

    constructor(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
    }

    checkAvailability() {
        return this.rooms - this.booked;
    }

    bookRoom() {
        if (this.checkAvailability() > 0) {
            this.booked += 1;
            console.log('Room Booked!')
            return true;
        } else {
            return false;
        }
    }
}

const myHotel = new Hotel('Grand Californian', 750, 263);
console.log(myHotel);
console.log(myHotel.name);
console.log(myHotel.booked);
myHotel.bookRoom();
console.log(myHotel.booked);