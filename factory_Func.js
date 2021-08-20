let factoryFunction = (name, id, age) => {
   return {
      name: name,
      id: id,
      age: age
   }

};

let ajithDetails = factoryFunction("ajith", "4006", "22");
let rajaDetails = factoryFunction("raja", "2341", "24");
let mohanDetails = factoryFunction("mohan", "1231", "26");
console.log(" hello " + ajithDetails.name);
console.log(rajaDetails);
console.log(mohanDetails);
