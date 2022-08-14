// // object literal for creating objects
// let car ={
//     name :"Maruti",
//     topspeed:90,
//     run:function(){
//         console.log("car is running");
//     }
// } ;

// //we have already seen constructors like these 
// // new Date();

// Creating  a constructor for cars

// function myPrime(givenNumber){
//     this.Number=givenNumber;
//     this.run=function(){
//         let i;
//         let sum=0;
//         for(i=1;i<=this.Number;i++){
//             if(this.Number%i===0){
//                 sum=sum+1;
//             }

//         }
//         if(sum===2){
//            return console.log(`${this.Number}  is a prime number`);
//         }
//         else{
//             return console.log(`${this.Number}  is not  a prime number`);
//         }
//     };

// }

// prime1=new myPrime(5);
// console.log(prime1);
// prime1 = new myPrime(5);
// prime2 = new myPrime(7);
// console.log(prime2);
// prime3 = new myPrime(9);
// prime4 = new myPrime(11);
// prime5 = new myPrime(15);
// console.log(prime1,prime2,prime3,prime4,prime5);


// function myPrime() {
//     let n=document.getElementById("num").value;
//     let i;
//     let sum = 0;
//     for (i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             sum = sum + 1;
//         }

//     }
    
//     if (sum == 2) {
//         var result=`${n} is prime NO`;
//         document.getElementById("show-box").innerHTML=result;
        
//     }
//     else {
//         var result=`${n} is not prime NO`;
//         document.getElementById("show-box").innerHTML=result;
        
//     }
//     return result;
// };




// myPrime();


// function myPallindrome(){
//     var n=Number(document.getElementById ("num").value);
//     var m=n;
//     var reverse=0;
//     while(n>0){
//         var r=n%10;
//         reverse =(reverse*10)+r;
//         n= parseInt(n/10);
//     }
//     if (reverse===m){
//         var res=`${m} is pallindrome`;
//         document.getElementById("show-box").innerHTML=res;
//     }
//     else {
//         var res=`${m} is not pallindrome`;
//         document.getElementById("show-box").innerHTML=res;
//     }
//     return res;



// };
// myPallindrome();

// function myArmstrong()
// {
//     var n=Number(document.getElementById("num").value);
//     var m=n;
//     var sum=0;
//     var r;
//     while(n>0){
//         r=n%10;
//         sum=sum+Math.pow(r,3);
//         n=parseInt(n/10);
//     }
//     if (sum===m){
//         var res=`${m} is Armstrong Number`;
//         document.getElementById("show-box").innerHTML=res;
//     }
//     else {
//         var res=`${m} is not an  Armstrong Number`;
//         document.getElementById("show-box").innerHTML=res;
//     }
//     return res;


// }


function addition(){
    let num_1=Number(document.getElementById("num_1").value);
    let num_2=Number(document.getElementById("num_2").value);
    let sum;
    sum=num_1+num_2;
    document.getElementById("add-box").innerHTML=sum;

}
function subtraction(){
    let num_1=Number(document.getElementById("num_1").value);
    let num_2=Number(document.getElementById("num_2").value);
    let sub;
    sub=num_1-num_2;
    document.getElementById("sub-box").innerHTML=sub;
}
function Multiplication(){
    let num_1=Number(document.getElementById("num_1").value);
    let num_2=Number(document.getElementById("num_2").value);
    let Mul;
    Mul=num_1*num_2;
    document.getElementById("mul-box").innerHTML=Mul;
}
function Divison(){
    let num_1=Number(document.getElementById("num_1").value);
    let num_2=Number(document.getElementById("num_2").value);
    let Div;
    Div=parseFloat(num_1/num_2);
    document.getElementById("div-box").innerHTML=Div;
}

