class Assignment {
    title;
    dueDate;
    totalPoints;
    completed = false;

    constructor(title, dueDate, totalPoints) {
        this.title = title;
        this.dueDate = dueDate;
        this.totalPoints = totalPoints;
    }

    submit() {
        this.completed = true;
        return `Assignment ${this.title} has been submitted.`;
    }

    getTimeRemaining() {
        let now = new Date();
        let due = new Date(this.dueDate);
        let daysLeft = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
        return daysLeft;
    }
}

class CodingAssignment extends Assignment {
    programmingLanguage;
    testCases;
    passedTests;

    constructor(title, dueDate, totalPoints, programmingLanguage, testCases) {
        super(title, dueDate, totalPoints);
        this.programmingLanguage = programmingLanguage;
        this.testCases = testCases;
        this.passedTests = 0;
    }

    runTests() {
        this.passedTests = Math.floor(Math.random() * this.testCases + 1);
    }
}

class EssayAssignment extends Assignment {
    wordCount;
    citations;
    currentWordCount;

    constructor(title, dueDate, totalPoints, wordCount, citations) {
        super(title, dueDate, totalPoints);
        this.wordCount = wordCount;
        this.citations = citations;
        this.currentWordCount = 0;
    }

    updateProgress(words) {
        this.currentWordCount = words;
        return (this.currentWordCount / this.wordCount) * 100;
    }

    
}

// Coding Assignments
const javaScriptAssignment = new CodingAssignment('JavaScript Assignment', '2025-10-15', 100, 'JavaScript', 5);
console.table(javaScriptAssignment);
console.log(javaScriptAssignment.submit());
console.log(`${javaScriptAssignment.getTimeRemaining()} days remaining`);
javaScriptAssignment.runTests();
console.log(`${javaScriptAssignment.passedTests} tests passed`);
console.log(` `);

const pythonAssignment = new CodingAssignment('Python Assignment', '2025-01-28', 100, 'Python', 10);
console.log(pythonAssignment.submit());
console.table(pythonAssignment);
console.log(`${pythonAssignment.getTimeRemaining()} days remaining`);
pythonAssignment.runTests();
console.log(`${pythonAssignment.passedTests} tests passed`);
console.log(` `);

// Essay Assignments
const historyEssay = new EssayAssignment('History Essay', '2025-02-15', 100, 2000, 5);
console.table(historyEssay);
console.log(historyEssay.submit());
console.log(`${historyEssay.getTimeRemaining()} days remaining`);
console.log(`${historyEssay.updateProgress(500).toFixed(2)}% towards required word count`);
console.log(historyEssay.currentWordCount);
console.log(` `);

const englishEssay = new EssayAssignment('English Essay', '2025-05-04', 100, 1977, 3);
console.log(englishEssay.submit());
console.log(`${englishEssay.getTimeRemaining()} days remaining`);
console.log(`${englishEssay.updateProgress(1000).toFixed(2)}% towards required word count`);
console.table(englishEssay);
