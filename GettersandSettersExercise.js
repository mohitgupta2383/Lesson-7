// 1 Create a class called Square with a single property, sideLength and create a constructor that assigns that value 

// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }
// }

// let sq = new Square(16);

// console.log(sq);

// 2 Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }

//     get area() {
//         return this.sideLength ** 2;
//     }
// }

// let sq = new Square(16);

// console.log(sq.area);


// 3 Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt function to retrieve the square root of the area and assign it as the sideLength)

// class Square {
//     constructor(sideLength, area) {
//         this.sideLength = sideLength;
//     }

//     get area() {
//         return this.sideLength * this.sideLength;
//     }

//     set area(value) {
//         this.sideLength = Math.sqrt(value);
//     }
// }

// let sq = new Square(16, 256);

// console.log(sq.area);
// sq.area = 100;
// console.log(sq.area);
// console.log(sq.sideLength);