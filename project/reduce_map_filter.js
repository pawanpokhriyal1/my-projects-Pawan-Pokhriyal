const users = [{ fName: "abah", lName: "saini", age: 28 },
{ fName: "abah", lName: "saini", age: 25 },
{ fName: "abah", lName: "saini", age: 75 },
{ fName: "abah", lName: "saini", age: 65 }];

let func = users.reduce((acc, curr) => {
    if (curr.age< 50) {
        acc.push(curr.lName);
    }
    return acc;
}, []);
console.log(func);