let a,b,s,r,t,x,y,z,w;
a=5;
b=10;

x=10+5;//arithmatic operator 
console.log(s);
y=20-8;//arithmatic operator 
z=-x //unary minus
console.log(z);

w=+y; //unary positive //1100
console.log(w);

s=10//1010  
r=y**s; //multiplicative operator
console.log("the multiplicative operator " +r);

 t= r>y ? "r greater" : "y greater";//ternary operator
 console.log("the ternary operator " +t);

 s+=y;//assignment operator
 while(y<15) //while loop
 {
    console.log(y);
     y++;
 }

// break and continue
for(let u=2;u<6;u++){
    console.log("the value of u is",u);

   if (u==4){
    console.log("entered in if");
    //boolean operators
       continue  ;
   }
}
//assignment operator
//switch  & break
console.log(" the AND operator " +(y&s));//bitwise AND //y&s
for(let i = 2 ; i<6;i++){
    switch(i){
        case 1:
            console.log("the number is 1");
            break; //break statement
        case 3:
            console.log("the numbers is 5");
            break;
        case 5:
            console.log("the number is 5");
            break;
        default :
             console.log("the number is not in the case");
    }
    
}

console.log(s==y);//relational operator
//bitwise AND operator
if(a==5 ^ b==12){
    console.log("s = 10 and a == 5");
}
else{
    console .log("declared value is wrong");
}
//for - in
let i ={name:"name",degree:"b.e",branch:"cse"};
for(let arr in i){
  console.log(i[arr]);
}