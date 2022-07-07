let Name='sohan';
console.log("my string is  "+Name);
console.log("data type is "+(typeof Name));

let marks=45.65;
console.log("data type is "+(typeof marks));

let isDriver=true;
console.log("data type is "+(typeof isDriver));

let nulvar=null;
console.log("data type is "+(typeof nulvar));

let undef=undefined;
console.log("data type is "+(typeof undef));

// object array
let myarr=[1,2,8,false,"manik"];
console.log("data type is "+(typeof myarr));

// object literal
let stMarks={
    ram:80,shyam:56,ramesh:89
}
console.log("data type is "+(typeof stMarks));

function findBooks() {

}
console.log("data type is "+(typeof findBooks));

// objectl
let date= new Date();
console.log("data type is "+(typeof new Date));

//type converesion 
console.log("welcome to Type conversion ");

// let myVar;
// myVar=string(34);
// console.log(myVar,(typeof myVar));

// let booleanVar = string(true);
// console.log(booleanVar,(typeof booleanVar));

let stri= Number("4568");
stri= Number("456f8");
stri= Number(false);
stri= Number(true);
// stri= string(true);
// console.log(stri,(typeof stri));
stri= String([1,2,3,4,5,6,7,8,9]);
console.log(stri.length,(typeof stri));

let number= parseFloat('34.058');
console.log(number.toFixed(2),(typeof number));

//TYPE COERCION


let mystr = Number ("698");
let mynum = 34;
console.log(mystr+mynum);

let res
let a=90
res= String(a) // returns a string from a number variable a
String(378009) // returns a string from a number literal 378009
a.toString() 
(378009).toString()