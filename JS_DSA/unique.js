function countUnique(array){
    if(array.length){
        let i=0;
        for(let j=1;j<array.length;j++){
            if(array[i]!==array[j]){
                i++;
                array[i]=array[j];
            }
        }
        return i+1;
    }
    else{
        throw new Error ("array is empty");
    }
}
let c=countUnique([1,1,2,3,3,4,5,6,7,7,8,8,9]);
console.log(c);