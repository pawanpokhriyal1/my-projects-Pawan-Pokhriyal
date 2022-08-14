// anagram is when the length of two string is same ,letter is same with same no of time but arrangement is different
// condition
//length check 
//{}use this object to retrieve the key value pair for no of ocureences of each leter

let isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let counter = {};


    for (let letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter]);
    }
    console.log(counter);
    console.log(str2);

    for (let items in str2) {
       
        if (!counter[items]) {
            return false;
        }
        counter[items] -= 1;
    }
    
    return true;

}

let f = isAnagram('hello', 'llohe');
console.log(f   );