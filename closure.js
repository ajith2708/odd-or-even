//closure 
//closure gives you access to an outer function’s scope from an inner function
//closures are created every time a function is created, at function creation time
let OuterFunction = () => {

  let outerVariable = 100;

  let InnerFunction = () => {
    console.log(outerVariable);
  }

  return InnerFunction;
}
let innerFunc = OuterFunction();

innerFunc();

//this keyword - the object that is executing the current function
const video = {
  title: 'song',
  play() {
    console.log(this);
  }
};
function Video(title) {
  this.title = title;
  console.log(this);
}
const v = new Video('movie');


let arr = [];
for (let i = 0; i < 1024 * 1024 * 108; i++) {
  arr.push(1);
}
console.log(arr);

//static
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello(x) {
    return "Hello " + x.carname;
  }
}

mycar = new Car("Ford");
console.log(Car.hello(mycar));

//private variables

class Counter {
  #value = 0; //private variables
  increment() {
    this.#value++;
  }
  get value() {
    return this.#value;
  }
}
const counter = new Counter();
console.log(counter.value);
counter.increment();
console.log(counter.value);

