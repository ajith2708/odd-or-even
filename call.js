//when callback function is loading or delay , other function will be executed. 
//when callback function is resolved then callback is executed
let callback = () => {
    console.log("connected the database wait for 5 minutes");
}
console.log("user 1 made a request");
setTimeout(callback, 5000);
console.log("user 2 made a request");
setTimeout(callback, 5000);
console.log("user 3 made a request");
setTimeout(callback, 5000);
