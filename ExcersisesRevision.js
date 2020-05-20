// 1 Create a class called Square with a single property, sideLength and create a constructor that assigns that value

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    // 2 Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)
    get area() {
        return this.sideLength * this.sideLength
    }

    // 3 Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt function to retrieve the square root of the area and assign it as the sideLength)
    set area(value) {
        this.sideLength = Math.sqrt(value);
    }
}

// let sq = new Square(4);
// console.log(sq);
// console.log(sq.area);
// sq.area = 25;
// console.log(sq);
// console.log(sq.area);

// Inheritance
// 1 Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // 2 Create a method in person called getInfo that takes no parameters and returns information about the name and age of the person
    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }
}

let me = new Person("Luke", "Parker", 23);
// console.log(me);
// console.log(me.getInfo());


// 3 Create a class called Student that extends Person. Student should have a property called grades that should be an array of numbers that represent their mark out of 100 for a series of tests
class Student extends Person {
    constructor(firstName, lastName, age, grades) {
        super(firstName, lastName, age);
        this.grades = grades;
    }

    // 4 Create a method inside student that calculates their average grade
    getAverageGrade() {
        // let totalGrades = 0;
        // for (let i = 0; i < this.grades.length; i++) {
        //     let grade = this.grades[i];
        //     totalGrades += grade;
        // }

        let totalGrades = this.grades.reduce(function(currentTotal, grade) {
            return currentTotal + grade;
        }, 0);

        return totalGrades / this.grades.length;
    }

    // 5 Override the getInfo method for Student so that it also displays the average grade of the student. Make sure to include a call to super.getInfo
    getInfo() {
        // return `${super.getInfo()}. ${this.firstName}'s average grade is ${this.getAverageGrade()}`;
        return super.getInfo() + ". " + this.firstName + "'s average grade is " + this.getAverageGrade();
    }
}

let student = new Student("Max", "Kellett", 25, [87, 92, 67, 72]);
console.log(student.getInfo());

// 6 Create a class called Teacher that extends Person. Teacher should have a property called students that should be an array of Student objects representing the students in their class
class Teacher extends Person {
    constructor(firstName, lastName, age, students) {
        super(firstName, lastName, age);
        this.students = students;
    }

    // 7 Create a method inside Teacher that calculates the average grade across all of their students and returns it as a number.
    getStudentAverageGrade() {
        // let totalGrades = 0;
        // for (let i = 0; i < this.students.length; i++) {
        //     let student = this.students[i];
        //     totalGrades += student.getAverageGrade();
        // }
        let totalGrades = this.students.reduce(function(currentTotal, student) {
            return currentTotal + student.getAverageGrade();
        }, 0);

        return totalGrades / this.students.length;
    }

    // 8 Override the getInfo method for Teacher so that it also displays the average grade of their students. Make sure to include a call to super.getInfo
    getInfo() {
        return super.getInfo() + ". The average grade for their students is " + this.getStudentAverageGrade();
    }
}

let students = [
    new Student("Max", "Kellett", 25, [87, 68, 78, 91]),
    new Student("Daniella", "Matthews", 28, [46, 68, 91]),
    new Student("Shelly", "Andrews", 21, [45, 56, 75, 92]),
    new Student("Dave", "Parks", 40, [90, 98, 88, 91, 96]),
];


let myTeacher = new Teacher("Luke", "Parker", 23, students);

console.log(myTeacher);
console.log(myTeacher.getInfo());