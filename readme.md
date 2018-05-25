# To-do list application

Let's make a full CRUD app!

![To Do List](https://i.giphy.com/xTiTnuhyBF54B852nK.gif)

## Setup

No starter files!

## Submission

Homework is due Monday at 11pm

## Assignment

We're going to practice implementing full CRUD functionality in a to-do list app.

#### Part 1 - Create a new Node Application

The directions are going to be a little more sparse as you should be able to start remembering all the steps you need to perform.

* Fork and clone this repository
* Initialize your node project with `npm init`
* Create a server file for your app
* Set up the folder structure for your app - For example: `views`, `models`, etc.
* Install any npm packages you might need:
    - express
    - ejs
    - pg-promise
    - body-parser
* Add a `.gitignore` file and add the following files and folders to it:
    - `node_modules/`
* Prepare as much of the app structure as you can remember. Before you actually start coding, perform an initial `git commit`.

#### Part 2 - Set Up the Database

* In `database/schema.sql` create a new database called `todo_app`
* Create a table called `tasks`
* `tasks` should have columns for:
    - id
    - subject
    - content
* In `database/seed.sql` create some intial data for your tasks table
* Make sure your database is set up properly before moving on

#### Part 3 - Core App Functionality

Hopefully at this point the setup process for Node/Express apps is becoming more familiar. Set up the following files/folders:

* `server.js`
* `models/`
    -`Task.js`
* `views/tasks/`
    - `index.ejs`
    - `show.ejs`

Make the following routes render HTML templates with *hardcoded fake data in the EJS templates*. Remember, as web developers we should break apart big problems into subproblems. Adding hardcoded sample data (like "buy salami") into the EJS files:

`GET /tasks` should render the `views/tasks/index.ejs` view, which renders a list of all tasks. It should include the form to create a new task.
`GET /tasks/:id` should render the `views/tasks/show.ejs` view, which renders one task.
`POST /tasks` should handle a form submission to create a new task, and redirect the user to the `GET /tasks` page.

#### Part 4 - Set Up Our Model

Now let's connect our Postgres database with our app using **pg-promise**.

* In `database/connection.js`, setup a database connection with pg-promise.
* In your `models/Task.js`, create and export a model object for `Task` with `all`, `find`, and `create` methods.

Example with Books:

``` js
const Book = {}

Book.all = () => // your code here
Book.find = () => // your code here

module.exports = Book
```

* In `server.js`, use the model methods to fetch data and pass the data into your EJS templates.
* In your view files, use the data passed into them with EJS syntax (`<%= %>` and `<% %>`) instead of the hardcoded data.

## Part 5 - Style

- Style the website so it looks nice! Create a `client/css/style.css` file and serve it in your HTML templates using Express static middleware.

#### SUPER BONUS

[Learn about and add error handlers to your server](https://expressjs.com/en/guide/error-handling.html)

[Learn about Express DEBUG mode](https://expressjs.com/en/guide/debugging.html), and browse the different namespaces of Express DEBUG logs with your app. While you're there, read about [the debug package](https://www.npmjs.com/package/debug).

[Read about Security Best Practices with Express](https://expressjs.com/en/advanced/best-practice-security.html). There's a lot in here for them to learn about, including the `nsp` package and the `helmet` package introduces a bunch of innards of HTTP (caching, headers). Try some of them out in your app.
