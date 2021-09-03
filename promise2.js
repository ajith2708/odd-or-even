
const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second')
})

Promise.race([first, second]).then(result => {
    console.log(result) // second
})

let promise = new Promise((resolve, reject) {
    setTimeout(() => resolve({ msg: 'To do some more job' }), 1000);
});

promise.then((result) => {
    console.log(result);
    return { data: 'some data' };

});

promise.then((result) => {
    console.log(result);

    return { data: 'some other data' };
});

promise.then((result) => {
    console.log(result);

    return { data: 'some more data' };
});