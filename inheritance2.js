//combination inheritance
function Person(name) {
  this.name = name;
}
Person.prototype.job = 'frontend';
Person.prototype.sayHello = function () {
  console.log('Hello ' + this.name);
}
let person = new Person('Ajith');
person.sayHello();

function Child(name) {
  Person.call(this, name);
}
Child.prototype = new Person();
let child = new Child('Rajiv');
child.sayHello();
console.log(child instanceof Person);

//----------------------------------------------------------------------------
//prototypal inheritance
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

//--------------------------------------------------------------------------------
//parasitic Combination inheritance

function MyPerson(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  MyPerson.prototype.sayName = function () { console.log(this.name); }
}

MyPerson.prototype.sayBirthday = function () { console.log(this.birthday); }


function Employee(name, birthday, job) {
  //The second execution of the constructor
  MyPerson.call(this, name, birthday);
  this.job = job;

  Employee.prototype.sayJob = function () { console.log(this.job); }
}

//The first execution of the constructor
Employee.prototype = new MyPerson();

let emp1 = new Employee("Mike", "1980-01-01", "Project Manager");
emp1.sayName();
emp1.sayBirthday();
emp1.sayJob();
