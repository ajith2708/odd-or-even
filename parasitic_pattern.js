function Car(make, model, year) {
    let obj1 = new Object();

    obj1.make = make;
    obj1.model = model;
    obj1.year = year;
    obj1.sayCar = function () {
        console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    };

    return obj1;
}


// create 2 car objects for John and Jane
let johnCar = new Car('Ford', 'F150', '2011'),
    janeCar = new Car('Audi', 'A4', '2007');

johnCar.sayCar();
janeCar.sayCar();

