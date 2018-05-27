const express = require("express");
const bodyParser = require('body-parser');
const Task = require('./models/Task');


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: false
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});

