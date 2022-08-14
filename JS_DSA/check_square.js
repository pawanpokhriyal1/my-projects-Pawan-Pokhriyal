//check square

function check_Square(arr1, arr2) {


    let count = 0;
    for (i = 0; i < arr1.length ; i++) {
        for (j = 0; j < arr2.length ; j++) {
            if (parseInt(arr1[i] * arr1[i]) === parseInt(arr2[j])) {
                count += 1;
                console.log(' i ', i, '  j  ', j, '   count    ', count);
            }


        }

    }
    console.log(count);
    if (count === arr2.length) {
        return true;
    }
    else {
        return false;
    }

}
let res = check_Square([1, 2, 3, 4, 5, 6], [36, 9, 4, 16, 25, 1]);
console.log(res);


// function check_Square(arr1, arr2) {
//     console.log(arr1.length);
//     console.log(arr2.length);


//     let count = 0;
//     for (i = 0; i < arr1.length - 1; i++) {
//         let isSquare = false;
//         console.log(i);
//         for (j = 0; j < arr2.length - 1; j++) {
//             if (parseInt(arr1[i] * arr1[i]) === parseInt(arr2[j])) {
//                 isSquare = true;
//             }
//             if (j === arr2.length - 1) {
//                 if (!isSquare) {
//                     return false;
//                 }
//             }

//             // console.log(i, j);
//         }
//         return true;
//     }


// }
// let res = check_Square([1, 2, 3, 4, 5, 6], [36, 9, 4, 16, 25, 1]);
// console.log(res);