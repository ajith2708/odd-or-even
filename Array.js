//this is javascript comments
'use strict';
 //strict mode enabled
 //arithmatic operator
let arith = (x,y)=>{
       return { first : x+y,
        second : x == y,
        third :  x & y //bitwise 10-1010 ,12-1100
       }
};
var result = arith (10,12);
console.log(result.first);
console.log(result.second);
console.log(result.third);
console.log(typeof(10));//typeof

//if statement
let c = (a)=> {
    if (a >20){
        return "valid";
    }
    else if(a=20){
        return "same";
    }
    else {
        return "invalid";
    }
}
console.log(c(22));

//do - while 

let val="";
let doWh = (inc)=>{
do {
  val+= "\n The number is  " + inc ;
  inc++;

}while(inc<16);
};
doWh(12);
console.log(val);

//for statement ,break and continue
let ne="";
let fo = (dig)=>{
    for(;dig<12;dig++){
     if(dig == 7){
         continue;
     }
     if(dig == 9){
     break;
     }
     ne+=   "  \n the dig is " + dig;

    };

}
fo(5);
console.log(ne);

//switch  

let swi = (s) =>{
    switch (s){
        case 1: return "case 1";
        case 2 : return "case 2";
        case 3 : return "case 3";
        default : return " try again";
    }
};
console .log(swi(6));
