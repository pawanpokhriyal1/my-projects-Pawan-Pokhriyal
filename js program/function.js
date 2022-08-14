// undefined function
// let result = say('hello world');   
// console.log('result:',result);

function get_Ctc(salary,month){
    // let ctc=salary*month;
    return salary*month;
}
let total=get_Ctc(50000,12);
console.log(total);

let Name="rohan";
const my_greet=function(name,thank='thank you'){
    let msg=`Happy Birthday ${Name} How I wish I could fly to you right now ${thank}`
    return msg;
}
console.log(my_greet(Name,'THANKS A Lot'));

const myobj ={
    name:"ram",
    game: function(){
        return "GTA";
    }
}

console.log(myobj);
console.log(myobj.game);

arr=['fruit','vegetable','furniture'];
arr.forEach(function(element,index,array){
    // console.log(element,index,array);
    console.log(element,index);
});