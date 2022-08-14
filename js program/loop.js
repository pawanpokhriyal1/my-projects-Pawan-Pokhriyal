
//for loop 
for(var i=1;i<5;i++){
    console.log(i);
}
//forEach  FUNCTION IN ARRAY
let arr=[2,8,6,7,3,4,5];
for( i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr.forEach(function(element,index,array){
    console.log(element);
});

//an object with some properties
var person ={ name:"Raman",language:"javascript",age:20};
//loop through all the properties in object
for(var i in person){
    console.log(i + " = " + person[i]);
}
//while loop
let j=1;
while (j<10){
    console.log(j);
    j +=1;

}

do{
    console.log(j);
    j +=1;
}while(j<20);

//breaking a loop
for(var k=1;k<5;k++){
    
    console.log(k);
    if(k===2){
        break;
    }
    
}

//skipping an iteration using continue
for(var m=1;m<5;m++){
    
   
    if(m===2){
        continue;
    }
    console.log(m);
}