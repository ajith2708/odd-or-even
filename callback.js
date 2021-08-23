let function1 = (a, b, callback) => {
    console.log(a + b);
    callback();
}

let function2 = () => {
    console.log("call back executed");
}
function1(10, 15, function2);

//set timeout
for (let i = 0; i < 15; i++) {
    setTimeout(() => {
        console.log(i);
    }, 2000);
}



