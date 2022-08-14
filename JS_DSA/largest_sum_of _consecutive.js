//count largest sum of consecutive digits

function find_largest(array, num) {
    if (num > array.length) {
        throw new Error("num is not greater than array");

    }
    else {
        let max = 0;
        
        for (let i = 0; i < array.length - num + 1; i++) {
            let temp = 0;
            for (j = i; j < (i + 4); j++) {
                temp += array[j];
                console.log(i,j,temp);
                
                
            }
            console.log(temp);
            if (temp > max) {
                max = temp;
            }
            console.log("max at loop ",i,"is :",max);

        }
        return `max value  is ${max}`; 
    }

}
let res = find_largest([1, 2, 4, 5, 4, 7, 6, 8, 4, 6,], 4);
console.log(res);