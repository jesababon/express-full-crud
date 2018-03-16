# To Do List

Let's make a full CRUD app!

![To Do List](https://i.giphy.com/xTiTnuhyBF54B852nK.gif)


## Learning Objectives
* EJS Templating
* CRUD Functionality
* PG-Promise (Postgresql Integration)

## Setup
No starter files!

## Completion
Parts 1 - 8 are required for completion.


## Submission
Homework is due Sunday at 11pm

## Assignment
Tonight we're going to make our first real, To Do List app! To Do Lists might not be the most exciting app to build, but it's a great way to practice implementing full CRUD functionality in a web application.

#### Part 1 - Create a new Node App
Directions are going to be a little more sparse as you should be able to start remembering all the steps you need to perform.
* Fork and Clone this repo
* Create a server file for your app
* Initialize your Node app
* Set up the folder structure for your app - For example: `views`, `models`, `db`, `migrations`, etc
* `npm install --save` any modules you might need
    - express
    - ejs
    - pg-promise
    - body-parser
* Add a `.gitignore` file and add the following files and folders to it:
    - `.gitignore`
    - `node_modules/`
* Prepare as much of the app structure as you can remember. Before you actually start coding, perform an initial `git commit`.

#### Part 2 - Set Up the Database

* Enter `psql` and create a new database called `todo_app`
* Create an `add-todo-table.sql` file in the folder `migrations/`
* In `add-todo-table.sql`, create a table called `tasks`
* `tasks` should have columns for:
    - id
    - subject
    - content
* Once your migration is ready, run it with the command `psql -d todo_app -f add-todo-table.sql` **make sure you are in the migrations folder**
* Create a `seed.sql` file in the folder `seeds/`
* In `seed.sql`, create some intial seed data for your tasks table
* Once your seed is ready, run it with the command `psql -d todo_app -f seed.sql` **make sure you are in the seeds folder**
* Make sure your database is set up properly before moving on

#### Part 3 - Core App Functionality

Hopefully at this point the setup process for Node/Express apps is becoming more familiar. Set up the following files/folders:

* `sever.js`
* **models**
    -`Task.js`
* **db**
    - **migrations**
        - `add-todo-table.sql`
    - **seeds**
        - `seed.sql`
* **views**
    - `index.ejs`
    - `show.ejs`
    - `new.ejs`
    - `edit.ejs`

Before moving on, make sure that your To Do app starts without any errors.

#### Part 4 - Set Up Our Model

Now let's connect our Postgres database with our app using **pg-promise**.

* In your `Task.js` model, using **pg-promise**, establish a connection to your postgres database called `todo_app`
* Create an object where you can put all of your model functions.
* Create a `Task` object with methods for `findAll`, `findById`, `create`, `edit`, and `delete`
* Remember to export this model

Example with Books:

``` js
const Book = {}

Book.findAll = () => {// your code here}
Book.findById = () => {// your code here}

module.exports = Book
```

#### Part 5 - Confrim Everything Works

Let's put the finishing touches on this To Do app and confirm everything works.

* Make sure there is something in your `tasks` table so that we can test our To Do app
* Update your `server.js` to `require` the `Task` model and pass data to the view
Example with Books:
``` js
const Book = require('./models/Book')

app.get('/', (request, response) => {
  // run query then resolve promise
  Book.findAll().then(everyBook => {
    response.render('index', { books: everyBook })
  })
})
```

* Update your **views** to incorporate the data being fed from the server
* Spin up your server, navigate to `localhost:3000/` and confirm that your `index.ejs` is being rendered with data from your `tasks` table

If you made it this far, congrats! You're almost done! Next is the remaining three parts of CRUD...CUD.

#### Part 6 - Create Functionality

Implement CREATE functionality. You'll need to add an New **view** and update `server.js` with the route `/new` and **model**.
*Maybe reference the [post requests lecture](https://git.generalassemb.ly/wdi-nyc-ewok/LESSON_U02_D10_POST_REQUESTS)* 🚀

#### Part 7 - Delete Functionality

Implement DELETE functionality. Think about what files need to be updated to make this work. *No Need to create a new view, use postgress to test it*

#### Part 8 - Edit Functionality

Implement UPDATE functionality. Update `server.js` and **model**. *No Need to create a new view, use postgress to test it*


#### BONUS - MORE GOODIES

- Add an edit button that will take the user to an Edit  **view** so it prepopulates the to do (task) in the input fields (use the `value` html attribute). *you will need a new route where the for will be displayed, maybe `/:id/edit`?* 🧐

- Add a delete button to you task and redirect the user to their tasks

- Style this bad boy so it looks nice!

#### SUPER BONUS - Install `bcryptjs`, `cookie-parser`, `express-sessions`, `passport`, and `passport-local` and get auth-y in here! Spoiler alert: you'll need to add a couple more views to pull off this bonus




