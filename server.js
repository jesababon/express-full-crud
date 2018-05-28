const express = require("express");
const bodyParser = require('body-parser');
const Task = require('./models/Task');
const PORT = process.env.PORT || 3000;
const app = express();

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


app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});

