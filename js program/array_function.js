// array using function and for loop with object 


// function stackNumber(arr){
//     let i;
//     for(i=0;i<arr.length;i++){
//         console.log(`${i+1} element is :`,arr[i]);
//     }

// }
// let myarr=[1,2,3,4,5,6,7,8,9,10];
// stackNumber(myarr);

// function getEvenOdd(arr){

//     let myeven=[];
//     let myOdd=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             myeven.push(arr[i]);
//         }
//         else{
//             myOdd.push(arr[i]);
//         }
//     }

//     return {
//         even: myeven,
//         odd: myOdd
//     };

// }

// let result = getEvenOdd(myarr);

// console.log(result.odd, result.even)



/// for Each Array function

// function stackNumber(arr){
//         let i;
//         for(i=0;i<arr.length;i++){
//             console.log(`${i+1} element is :`,arr[i]);
//         }

//     }
//     let myarr=[1,2,3,4,5,6,7,8,9,10];
//     stackNumber(myarr);

//     function getEvenOdd(arr){

//         let myeven=[];
//         let myOdd=[];
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]%2===0){
//                 myeven.push(arr[i]);
//             }
//             else{
//                 myOdd.push(arr[i]);
//             }
//         }



//         myOdd.forEach((myOdd,index,array)=> {
//             // console.log("index :   "+(index+1)+"    Odd no is "+myOdd);
//             console.log(array);

//         });
//         myeven.forEach((myeven,index,array )=> {
//             // console.log("index :  "+(index+1)+"   Even no is "+myeven);
//             console.log(array);

//         });
//         my_stack_no=[myOdd,myeven];


//         my_stack_no.forEach((my_stack_no,index ,array)=> {
//             console.log(my_stack_no);

//         });


//     }
//     getEvenOdd(myarr);




// stackNumber = (arr) => {

//     for (let i = 0; i < arr.length; i++) {
//         console.log(`${i + 1} element is :`, arr[i]);
//     }

// }

// let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// stackNumber(myarr);

// get_Even_Odd = (myarr) => {
//     let my_even = [];
//     let my_odd = [];

//     myarr.forEach((value,index) => {

//         if (myarr === "") {
//             return "empty array please provide array";
//         }
//         else {
//             if (myarr[index] % 2 === 0) {
//                 my_even.push(myarr[index]);
//             }
//             else {
//                 my_odd.push(myarr[index]);
//             }
//         }




//     });
//     return [my_odd, my_even];

// }
// let result = get_Even_Odd(myarr);
// console.log(result);


//map function in  array

// let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// stack_no = () => {
//     let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let my_even = [];
//     let my_odd = [];
//     let input;

//     myarr.forEach((value, index,array) => {

//         if (myarr === "") {
//             return "empty array please provide array";
//         }
//         else{
//             my_even[index]=value*2;
            
//         }
           



//     });
//     // return my_even; 
//     return my_even;


// };

// // let my_odd_even = myarr.map(stack_no);
// let my_odd_even = myarr.map(stack_no);
// console.log(my_odd_even);

//filter function in  array

let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

stack_no_even = (value,index,array) => {
    for(i=0;i<array.length;i++){
        if(value%2===0){
            return value;
        }
    }
};

stack_no_odd = (value,index,array) => {
    for(i=0;i<array.length;i++){
        if(value%2!==0){
            return value;
        }
    }
};

// let my_odd_even = myarr.map(stack_no);
let my_even = myarr.filter(stack_no_even);
console.log(my_even);
let my_odd=myarr.filter(stack_no_odd);
console.log(my_odd);
