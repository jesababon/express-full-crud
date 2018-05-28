const db = require('../database/connection');

// console.log(db);
const Task = {};


Task.all = function(){
  return db.any('SELECT * FROM tasks');
};

Task.all().then(tasks => {
  return tasks;
});

Task.find = (id) => {
  return db.one(`SELECT * FROM tasks WHERE task_id = $1`, [id]);
};

console.log('task.js connected');


module.exports= Task;
