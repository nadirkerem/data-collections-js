/*
Part 4: Sorting and Manipulating Data
It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
Using array methods, accomplish the following tasks, in order upon the result of Part 3:
*/

const csv1 =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

const rows = csv1.split('\n');

const numberOfColumns = rows[0].split(',').length;

let array = [];

rows.forEach((row) => {
  const columns = row.split(',');
  array = [...array, columns];
});

// console.log(`Number of columns ${numberOfColumns}`);

// console.log(array);

const keys = array[0].map((header) => header.toLowerCase());

let newArray = [];

array.slice(1, array.length).forEach((rows) => {
  let object = {};

  rows.forEach((value, index) => {
    object[keys[index]] = value;
  });

  newArray = [...newArray, object];
});

console.log(newArray);

// 1. Remove the last element from the sorted array.

newArray = newArray.filter(
  (value) => newArray.indexOf(value) !== newArray.length - 1
);

console.log(newArray);

// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

newArray.splice(1, 0, {
  id: '48',
  name: 'Barry',
  occupation: 'Runner',
  age: '25',
});

console.log(newArray);

// 3. Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

// newArray.splice(newArray.length + 1, 0, {
//   id: '7',
//   name: 'Bilbo',
//   occupation: 'None',
//   age: '111',
// });

newArray.push({
  id: '7',
  name: 'Bilbo',
  occupation: 'None',
  age: '111',
});

console.log(newArray);

// 4. Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

let totalAge = 0;

for (let i = 0; i < newArray.length; i++) {
  totalAge += Number(newArray[i].age);
  console.log(newArray[i].age);
}

const averageAge = (totalAge / newArray.length).toFixed(0);

console.log(`Average age of the group is: ${averageAge}`);
