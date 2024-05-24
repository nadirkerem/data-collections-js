/*
Part 1: Refactoring Old Code
When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.
*/

const csv =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

const rows = csv.split('\n');

for (row of rows) {
  const cells = row.split(',');

  const cell1 = cells[0];
  const cell2 = cells[1];
  const cell3 = cells[2];
  const cell4 = cells[3];

  console.log(cell1, cell2, cell3, cell4);
}
