sayHello("Hi There");
function sayHello(greeting) {
    console.log(greeting);
}
sayHello("Hi There");

// x = 5;
// console.log(x);
// let x;



function sayGoodbye(farewellMessage) {
    let myScopedVariable = "Hi";
    let myOtherScopedVariable;
    if(true) {
        myOtherScopedVariable = "Hello";
        myScopedVariable = myOtherScopedVariable;
        console.log(myScopedVariable);
    }

    if (true) {
        let myThirdScopedVariable = "Hello";
        console.log(myOtherScopedVariable)
    }
    // console.log(myOtherScopedVariable);
    console.log(farewellMessage);
    return myScopedVariable;
}

let myScopedVariable = sayGoodbye("Bye");

console.log(myScopedVariable)