const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}

class Person {
    constructor(firstName, lastName, age, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(getRandomGivenName(), getRandomFamilyName(), 34, i);
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, id, grades) {
        super(firstName, lastName, age, id);
        this.grades = grades;
    }

    getAverageGrade() {
        let totalGrades = this.grades.reduce(function (total, currentValue) {
            return total + currentValue;
        });

        return totalGrades / this.grades.length;
    }

    getInfo() {
        return `${super.getInfo()} and their average grade is ${this.getAverageGrade()}`
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, id, students){
        super(firstName, lastName, age, id);
        this.students = students;
    }
    getStudentAverageGrade() {
        let totalGrades = this.students.reduce(function (total, student) {
            let studentAvg = student.getAverageGrade();
            return total + studentAvg;
        }, 0);
        return totalGrades / this.students.length;
    }

    getInfo() {
        return `${super.getInfo()}, their average student grade is ${this.getStudentAverageGrade()}`
    }
}

let randomPeople = Person.generateRandomPeople(5);
console.log(randomPeople)