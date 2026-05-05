let arr = [12, 13, 45, 67, 89, 34];
for (var i = 0; i < 6; i++) {
  console.log(arr[i]);
}

console.log(arr);

//  update

arr[2] = arr[2] + 10;
console.log(arr);

//  delete
arr = [];
console.log(arr);

// push
let arr = [12, 89, 76, 56, 45, 89, 54, 34, 78, 90];
console.log(arr);
arr.push(99);
console.log(arr);

// pop
let arr1 = [12, 89, 76, 56, 45, 89, 54, 34, 78, 90];
arr.pop();
console.log(arr);

// unshift
arr.unshift(11);
console.log(arr);

// shift
arr.shift();
console.log(arr);