//prototype chaining
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}
let person = new Person("Selvam", "kumar", 25);
console.log(person.hasOwnProperty("firstName"));
console.log(person.hasOwnProperty("firstName"));
console.log(person.hasOwnProperty("getFullName"));
console.log(person.getFullName());
//-----------------------------------------------------------------
//constructor Stealing
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    // inherit from SuperType
    SuperType.apply(this);
}

let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);  // "red,blue,green,black"

let instance2 = new SubType();
console.log(instance2.colors);  // "red,blue,green"
//-----------------------------------------------------------
//parasitic inherotance
let MyPerson = function (name, age) {
    this.name = name;
    this.age = age;
};

let Employee = function (name, age, group) {

    let employee1 = new MyPerson(name, age);
    employee1.group = group;
    return employee1;
};

let testname2 = new Employee('jothika', 34, 'actress');
console.log(testname);
