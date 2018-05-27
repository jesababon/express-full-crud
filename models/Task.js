const db = require('../database/connection');

// console.log(db);

const Task = {};

Task.all = function () {
  return db.any('SELECT * FROM tasks');
};

Task.all()
  .then(tasks => {
    console.log(tasks);
    return tasks;

  });

console.log('blah');

module.exports = Task;
