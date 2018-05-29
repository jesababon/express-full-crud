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

Task.create = (task) => {
  return db.one(`INSERT INTO tasks (subject, content, due_date)
  VALUES ($1, $2, $3) RETURNING *`, [task.subject, task.content, task.due_date]);
};

Task.delete = (task) => {
  return db.result('DELETE * FROM tasks');
};


console.log('task.js connected');


module.exports= Task;
