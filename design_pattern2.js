//combination constructor / prototype pattern
// constructor function to create car objects
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// constructor prototype to share properties and methods
Car.prototype.sayCar = function () {
    console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
};

// create 2 car objects for John and Jane
let johnCar = new Car('Ford', 'F150', '2011'),
    janeCar = new Car('Audi', 'A4', '2007');

johnCar.sayCar();
janeCar.sayCar();

//-------------------------------------------------------------------------------
//Dynamic Prototype Pattern

function Bike(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    // constructor prototype to share properties and methods
    Bike.prototype.sayBike = function () {
        console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    }
}


// create 2 car objects for John and Jane
let johnBike = new Bike('Ford', 'F150', '2011'),
    janeBike = new Bike('Audi', 'A4', '2007');

johnBike.sayBike();
janeBike.sayBike();


//---------------------------------------------------------------------------------


