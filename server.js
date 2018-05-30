const express = require("express");
const bodyParser = require('body-parser');
const Task = require('./models/Task');
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs');
app.use('/client', express.static("client"));


//show all tasks
app.get('/tasks', (request, response) => {
  Task.all()
    .then(task => {
      response.render('tasks/index', {tasks: task});  //thanks Assan!
    });
});

//show specific task by id
app.get('/tasks/:id', (request, response) => {
  const id = request.params.id;
  Task.find(id).then(task => {
    response.render('tasks/show', {task: task});
  });
});

//post a new task
app.post('/tasks', (request, response) => {
  const addTask = request.body;
  Task.create(addTask).then(task => {
    response.redirect(302, '/tasks');
  });
});



//edit a  task
app.get('/tasks/:id/edit', (request, response) => {
  const id = Number(request.params.id);
  Task.find(id)
  .then(task => {
    response.render('tasks/edit', {task: task});
  });
});

//show edited task
app.put('/tasks/:id', (request, response) => {
  const id = Number(request.params.id);
  const updatedTask = request.body;
  updatedTask.task_id = id;
  Task.update(updatedTask)
    .then(updatedTask => {
      response.redirect(302, '/tasks');
    });
});


//delete a task
app.delete('/tasks/:id', (request, response) => {
  const id = Number(request.params.id);
  Task.delete(id).then(() => {
    response.redirect(302, '/tasks'); //figure it is result from the dinosaur lab
});
});


app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});
