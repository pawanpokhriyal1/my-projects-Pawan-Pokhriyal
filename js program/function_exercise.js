// function callName(){
//     console.log("Javascript");
// }
// callName();

// function myLang(lang){
//     return lang;
// }
// let result=myLang("hindi");
// console.log(result);

// function addition(n1,n2){
//     let add=n1+n2;
//     return add;
// }
// let x=addition(5,6);
// console.log(x);

// function subtaction(n1,n2){
//     let sub=n1+n2;
//     return sub;
// }
// let y=subtaction(5,6);
// console.log(y);

// function multiplication(n1,n2){
//     let mul=n1*n2;
//     return mul;
// }
// let z=multiplication(5,6);
// console.log(z);

// function divison(n1,n2){
//     let div=n1/n2;
//     return div;
// }
// let w=divison(5,6);
// console.log(w);




function calculator(num_1,num_2,operator){
   let sol;
    if (operator==="+"){
        sol=num_1+num_2;

    }
    else if(operator==="-"){
        sol=num_1-num_2;
    
    }
    else if(operator==="*"){
        sol=num_1*num_2;

    }
    else if(operator==="/"){
        sol=num_1/num_2;
    }
    else{
        sol="provide valid operator";
    }
    return sol;

}

let num_1=document.getElementById("btn-1").value ;
let num_2=document.getElementById("btn-2").value ;
let operator=document.getElementById("add").value ;




// let a=calculator(45,25,"+");
// console.log(a);
// let b=calculator(45,25,"-");
// console.log(b);
// let c=calculator(45,25,"*");
// console.log(c);
// let d=calculator(45,25,"/");
// console.log(d);
// let e=calculator(45,25,".");
// console.log(e);




// function calculator(num_1,num_2,operator){
//     let sol;
//      switch(operator){
//         case "+":
//             sol=num_1+num_2;
//             break;
//         case "-":
//             sol=num_1-num_2;
//             break;
//         case "*":
//             sol=num_1*num_2;
//             break; 
//         case "/":
//             sol=num_1/num_2;
//             break;
//         default:
//             sol="provide valid operator"; 
            
//         }
//         return sol;
 
//  }
//  let a1=calculator(45,25,"+");
//  console.log(a1);
//  let b1=calculator(45,25,"-");
//  console.log(b1);
//  let c1=calculator(45,25,"*");
//  console.log(c1);
//  let d1=calculator(45,25,"/");
//  console.log(d1);
//  let e1=calculator(45,25,".");
//  console.log(e1);