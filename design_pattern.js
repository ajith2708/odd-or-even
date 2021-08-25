//types of properties
//1.Named data properties
let obj = {
    id: 4006,
    Name: "Ajith",
    college: "MCE"
};
obj.Name ="Mani"
console.log(obj.Name);

//2.Named accessor properties (get & set)
let object = {
    get prop() {
        return this.college;
    },
    set prop(value) {
            this.Name=value;
    }
}
object.prop = "Raj"
console.log(obj.college);
console.log(object.Name);

//defining Multiple properties
const object1 = {};

Object.defineProperties(object1, {
    property1: {
        value: 42
    },
    property2: {}
});

console.log(object1.property1);

//-------------------------------------------------------------------------
// constructor function     
function Person(name, age, gender) {

    // assigning  parameter values to the calling object
    this.name = name,
        this.age = age,
        this.gender = gender
};
// creating objects
const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'female');

// accessing properties
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"
//--------------------------------------------------------------
//prototype function :

let Bicycle = function (brand) {
    this.brand = brand;
};

Bicycle.prototype.goForward= function(percent) {
        percent = ' Bicycle Moving forward at ' + percent + ' percent speed!';
        return percent;
    };
let bike = new Bicycle('ProdecoTech');
let speed = bike.goForward(100);
console.log(bike);
console.log(speed);
//-------------------------------------------------------------------------------
//Durable Constructor Pattern is similar to the Factory Pattern and Parasitic Constructor Pattern

function Car(make, model, year) {
    let durable = new Object();

    // public method
    durable.sayCar = function () {
        console.log('I have a '  + ' ' + year + ' ' + make + ' ' + model + '.');
    };

    return durable;
}


// create 2 car objects for John and Jane
let johnCar = Car('Ford', 'F150', '2011'),
    janeCar = Car('Audi', 'A4', '2007');

johnCar.sayCar();
janeCar.sayCar();
//--------------------------------------------------------------------------
