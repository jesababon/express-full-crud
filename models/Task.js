const db = require('../database/connection');

// console.log(db);
const Task = {};


Task.all = function(){
  return db.any('SELECT * FROM tasks');
};

Task.all().then(tasks => {
  return tasks;
});

console.log('task.js connected');


module.exports= Task;
