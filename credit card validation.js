function validate(n){
let  digits =n.toString().split('').map(Number);//separating to single values
if (digits.length  % 2 === 0){ //3
    digits = digits.map((digit,idx) => idx %2===0? digit *2 :digit);//if condition true ,even index  is doubled else holding  same vale;
}
else{ //1
    digits = digits.map((digit,idx) => idx %2===1? digit :digit * 2);//if a single value enter in this loop, the value will print else double
}
// fix the double digits //doubled digit more than 10 ;
digits = digits.map(digit =>digit >10 ?digit-9 :digit); 
//sum the digit
const sum = digits.reduce((acc,digit)=> acc+=digit,0); //sum of all digits
return sum %10 ===0; 
}
console.log(validate('212922197778') == true ? "verification success. your card is valid":" your card is invalid,try a new card");
