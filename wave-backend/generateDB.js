const sqlite3 = require('sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(`${__dirname}`, 'dev.sqlite');
if (fs.existsSync(dbPath)) {
  console.log('\x1b[31m%s\x1b[0m', 'This DB already exists');
  process.exit();
}
console.log('\x1b[36m%s\x1b[0m', 'Creating Tables');
const db = new sqlite3.Database(dbPath);
let i = 0;
const message = table => {
  console.log(`${table} created`);
  i = i + 1;
  if (i >= 2) console.log('\x1b[36m%s\x1b[0m', 'Finished creating tables');
};
db.run(
  'CREATE TABLE `history` (`id`	INTEGER UNIQUE,`body`	TEXT,PRIMARY KEY(id));',
  message('history')
);
db.run(
  'CREATE TABLE `timesheets` (`id`	INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,`date`	TEXT,`hoursWorked`	NUMERIC,`employeeId`	INTEGER,`jobGroup`	TEXT);',
  message('timesheets')
);
