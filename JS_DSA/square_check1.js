function check_Square(arr1, arr2) {
let map1={};
let map2={};

for(item of arr1){
    map1[item]=(map1[item]||0)+1;
}
for(item1 of arr2){
    map2[item1]=(map2[item1]||0)+1;
}
for(let key in map1){
    console.log('key',key);
    if(!map2[key*key]){
        return false;
    }
    if(map1[key] !==map2[key*key]){
        return false;
    }
}
return true;
   

}
let res = check_Square([1, 2, 2, 1, 5, 6], [36, 1, 4, 4, 25, 1]);
console.log(res);
