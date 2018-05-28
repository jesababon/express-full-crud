const express = require("express");
const bodyParser = require('body-parser');
const Task = require('./models/Task');


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/client", express.static("client"));


const PORT = process.env.PORT || 3000;

app.get('/tasks', (request, response) => {
  Task.all()
    .then(tasks => {
      const templateData = {};
      templateData.tasks = tasks;
      response.render('tasks/index', templateData);
    });
});




app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});

