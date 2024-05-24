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
    console.log(value);
    object[keys[index]] = value;
  });

  newArray = [...newArray, object];
});

console.log(newArray);
