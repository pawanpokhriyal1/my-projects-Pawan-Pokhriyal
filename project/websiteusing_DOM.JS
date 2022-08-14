console.log("welcome to webpage");
let a= document;
console.log(a);

let b=document.all;
console.log(b);


let c=document.forms[0];
console.log(c);

Array.from(c).forEach(function(element){
    console.log(element);
});
d=document.links[0];
console.log(d);