//arguments
function argCheck(parameter1, parameter2, parameter3) {
    if (parameter1 === undefined) {
        parameter1 = 6;
    }
    if (parameter2 === undefined) {
        parameter2 = 3;
    }
    if (parameter3 === undefined) {
        parameter3 = 5;

    }
    return parameter1 + parameter2 + parameter3;
};
console.log(argCheck());

//execution context 
function myFunction1() {
    return "Hello";
}
function myFunction2() {
    return myFunction1();
}
function myFunction3() {
    return myFunction2();
}

console.log(myFunction3());

//execution scope
//global scope
var myName = 'Ajith';

function logName() {
    return myName;
}

console.log(logName());
