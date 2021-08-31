//callback is a function that is passed into another function as a parameter
const f1 = (val, callback) => {
    return callback(val + 10)
}
const callback = (val) => {
    return val + 20;
}
console.log(f1(1, callback));


//promise
//resolve - promise success so .then is used
//rejected - promise is rejected so .catch is worked
let p1 = new Promise((resolve, reject) => {
    resolve([1, 2, 3, 4]);

});
p1.then((arr) => {
    console.log("promise p1 resolved with data:", arr);
});

//promise with async code


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});
promise.then((data) => {
    console.log("random int is passed to resole:", data);
});

//any function that returns a Promise is known as an async function
//async keyword declared before function it returns promises
//await is waiting for async response until code cannot be executed
let returnPromises = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise Executed...");
            resolve("Sample Data");
        }, 3000);
    });
}

async function ExecuteFunction() {
    let getData = await returnPromises();
    console.log(getData);
}

ExecuteFunction()


//converting call back to premises
const promisify = require('util').promisify;
const slowCallbackFunction = (done) => {
    setTimeout(function () {
        done()
    }, 300)
}
const slowPromise = promisify(slowCallbackFunction);

slowPromise()
    .then(() => {
        console.log('Slow function resolved')
    })
    .catch((error) => {
        console.error('There has been an error:', error)
    })