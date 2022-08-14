// binary search 
// Divide and conquerer technique
//array must be sorted

function binary_Search(array,num){
    let min=0;
    let max=array.length-1;
    
      for(let i=min;i<max;i++){
        let mid=parseInt((min+max)/2);
        console.log("min  ",min,"   max ",max,"  mid  ",mid,"  number is:  ",array[mid]);
        if (num<array[mid]){
           max=mid-1;
        }
        else if(num>array[mid]){
            min=mid+1;
        }
        else if(num=array[mid]){
            return `location where number ${num} is located is :  ${mid}`;
        }
      }
}
let res= binary_Search([11,25,32,46,51,56,66,73,79,83,89,91],32);
console.log(res);