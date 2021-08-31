//arguments
let argCheck = (parameter1, parameter2, parameter3) => {
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
let myFunction1 = () => {
    return "Hello";
}
let myFunction2 = () => {
    return myFunction1();
}
let myFunction3 = () => {
    return myFunction2();
}

console.log(myFunction3());

//execution scope
//global scope
let myName = 'Ajith';

let logName = () => {
    return myName;
}

console.log(logName());
//global context
let blog = 'ajith';

let logBlog = () => {
    let blog = "hello";
    console.log(blog);
}
logBlog();


