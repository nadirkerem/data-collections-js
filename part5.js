/*
Part 5: Full Circle
As a final task, transform the final set of data back into CSV format.
There are a number of ways to do this; be creative!
Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.
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

const keys = array[0].map((header) => header.toLowerCase());

let newArray = [];

array.slice(1, array.length).forEach((rows) => {
  let object = {};

  rows.forEach((value, index) => {
    object[keys[index]] = value;
  });

  newArray = [...newArray, object];
});

newArray = newArray.filter(
  (value) => newArray.indexOf(value) !== newArray.length - 1
);

newArray.splice(1, 0, {
  id: '48',
  name: 'Barry',
  occupation: 'Runner',
  age: '25',
});

newArray.push({
  id: '7',
  name: 'Bilbo',
  occupation: 'None',
  age: '111',
});

console.log(newArray);

// Part 5:

let csv2 = '';

csv2 += `${Object.keys(newArray[0]).toString()}\n`;

newArray.map((value, index) => {
  csv2 += `${Object.values(value).toString()}${
    index !== newArray.length - 1 ? '\n' : ''
  }`;
});

console.log(csv2);
