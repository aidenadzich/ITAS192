class ITClass {
    classCode;
    classSection;
    description;
    enrolled;
    teacherName;
    roomNumber;
    schedule;
    credits;

    constructor(classCode, classSection, description, enrolled, teacherName, roomNumber, schedule, credits) {
        this.classCode = classCode;
        this.classSection = classSection;
        this.description = description;
        this.enrolled = enrolled;
        this.teacherName = teacherName;
        this.roomNumber = roomNumber;
        this.schedule = schedule;
        this.credits = credits;
    }
}

let itClassList = [];
itClasses.forEach((className) => {
    let newClass = new ITClass(...className);
    itClassList.push(newClass);    
});

console.table(itClassList);