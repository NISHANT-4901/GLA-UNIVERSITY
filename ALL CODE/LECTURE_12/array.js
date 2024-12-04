// NON-DESTRUCTIVE METHOD: the method which do chage the original array

let a = [1, 2, 3, 4, 5, 6];
let b = [3, 2, 3, 2];
let ans = a.includes(5); // it check, if this element exist in array or not
console.log("BOOLEAN VALUE --> " + ans);

let ans1 = a.indexOf(6); // it give the position of that element if it exist
console.log("indexof function --> " + ans1);

let c = a.concat(b); // to join two string
console.log("concat function --> " + c);

let ans2 = a.join(); // to convert array to string
console.log("join function --> " + ans2);

console.log( "typeof --> " + typeof ans2);
