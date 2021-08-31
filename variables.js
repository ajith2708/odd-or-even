const x = 5;
//x = 10; //type error
let constFunction = () => {

    const x = 2;
}
constFunction(); //2
console.log(x); //outside function we call const value it prints global value


//const array

let constCar = ["BMW", "HONDA", "AUDI"]
constCar[0] = "Hyundai";
console.log(constCar);//we can change const value  by index, but we can't reassign the const

//let

let let_Value = 5;
let_Value = 20;
let_Value = "hello let"; //let can be reassign
console.log(let_Value);

let functionLet = () => {
    return let_Value = 9;
}
functionLet();
console.log(let_Value);// outside function we call let,it prints local scope value.

