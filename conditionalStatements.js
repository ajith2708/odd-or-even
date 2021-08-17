//this is javascript comments
'use strict';
//strict mode enabled
//arithmatic operator
let arithmatic = (x, y) => {
    return {
        first: x + y,
        second: x == y,
        third: x & y //bitwise 10-1010 ,12-1100
    }
};
let result = arithmatic(10, 12);
console.log(result.first);
console.log(result.second);
console.log(result.third);
console.log(typeof (10));//typeof

//if statement
let c = (a) => {
    if (a > 20) {
        return "valid";
    }
    else if (a = 20) {
        return "same";
    }
    else {
        return "invalid";
    }
}
console.log(c(22));

//do - while 

let value = "";
let do_while = (inc) => {
    do {
        value += "\n The number is  " + inc;
        inc++;

    } while (inc < 16);
};
do_while(12);
console.log(value);

//for statement ,break and continue
let new_value = "";
let for_state = (digit) => {
    for (; digit < 12; digit++) {
        if (digit == 7) {
            continue;
        }
        if (digit == 9) {
            break;
        }
        new_value += "  \n the dig is " + dig;

    };

}
for_state(5);
console.log(new_value);

//switch  

let switch_example = (expression) => {
    switch (expression) {
        case 1: return "case 1";
        case 2: return "case 2";
        case 3: return "case 3";
        default: return " try again";
    }
};
console.log(switch_example(6));
