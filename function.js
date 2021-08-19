//function overloading

let string=(parameter1)=> { 
  return parameter1;
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
console.log(obj1);

