// let arr=new Array();
// let arr=[];


let arr = ['first element', 'second element', 'last element'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length - 1]);

let age = [51, 65, 88, 32, 45, 85];
console.log(age.length);

let std = ['mana', 'mayank', 'manasvi', 'rohit']
console.log(std.indexOf('mayank'));

let s_age = age.sort();
console.log(s_age);

let r_age = age.reverse();
console.log(r_age);

let alpha = ['a', 'b', 'c'];
let numeric = [1, 2, 3];
var alphanumeric = alpha.concat(numeric);
console.log(alphanumeric);

let fruits = ["banana", "orange", "kiwi"];
let len = fruits.push("mango");
console.log(len);
console.log(fruits);
console.log(fruits.push("grape"));
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("stawberry");
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

// let User= new object();//object construcrtor syntax
// let User= {}; //object  literal syntax

let user = {
    name: "Harry",
    age: 25,
    language: "javascript"
};

// objectname.property;
// objectname['propertyname'];
user.name = "rohan";
console.log(user['name']);

user.age = 28;
console.log(user['age']);

let score = 100;

switch (score) {
    case 50:
        console.log("half century");

        break;
    case 100:
        console.log("century");

        break;


    default:
        case 50:
        console.log("not recognised");

        

        break;
}
 
const isMarried=false;

if (isMarried)
{
    console.log("you are not eligible");
}
else{
    console.log("you are eligible");
}