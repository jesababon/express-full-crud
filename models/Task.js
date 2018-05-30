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

//update function
Task.update = taskUpdate => {
  return db.none(`UPDATE tasks SET subject = $1, content = $2, due_date = $3 WHERE task_id = $4`, 
  [taskUpdate.subject, taskUpdate.content, taskUpdate.due_date, taskUpdate.task_id]);
};

//delete function
Task.delete = id => {
  return db.result('DELETE FROM tasks WHERE task_id= ${id}', {id: id});
};


console.log('task.js connected');


module.exports= Task;
