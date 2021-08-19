//performance
const { performance } = require('perf_hooks');
const t0 = performance.now();
for (let i = 20; i < 25; i++);
const t1 = performance.now();
console.log(`the performance  took ${t1 - t0} milliseconds.`);

//garbage collector
let garbageCollect = "new string";
garbageCollect = 20;
console.log(garbageCollect);

//mark and sweep
//mark phase analyse reached and unreached objects
//sweep phase analyse deletes unreached objects

let mark = {
    name: "mark"
};
mark = "sweep"
let sweep = "hello";
let markSweep = () => {
    one = {};
    two = {};
    one.key = sweep;
    one.key = mark;
    return "marksweep";
}
console.log(markSweep());

//reference count

let reference = () => {
    ref1 = {},
        ref2 = {},
        ref1.key = ref2; //one reference called 
    ref2.key = ref1;//2nd refernce called
    return 'hello';
}
console.log(reference());

