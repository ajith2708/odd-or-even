//function overloading

function string(parameter1) {  //a is function parameter
  return parameter1;
}
function string(parameter2) {
  return parameter2; //int
}
function string(parameter3) {
  return parameter3; //float
}
function string(parameter4) {
  return parameter4;//boolean
}
console.log(string("hi")); //function arguments
console.log(string(23));
console.log(string(23.5));
console.log(string(true));

//primitive values
let x, y;
x = 10;
y = x;
x = 20;
console.log(x);
console.log(y);

//reference values
let val1 = { value: 10 };
let val2 = val1;
val1.value = 20;
console.log(val1);
console.log(val2);

//copying values
//shallow copy
let obj = { foo: "foo", bar: "bar" };

let clonedObj = { ...obj };//spread
console.log(clonedObj);

//object assign
let obj1 = { a: 10 };
var obj2 = { b: 20 };
Object.assign(obj1, obj2);
console.log(new_obj);
console.log("the value of obj1 is");
console.log(obj1);

