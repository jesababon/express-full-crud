DROP DATABASE todo_app;
DROP TABLE IF EXISTS tasks;

CREATE DATABASE todo_app;

\c todo_app

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    subject VARCHAR(255),
    content VARCHAR(255),
    due_date DATE NOT NULL DEFAULT CURRENT_DATE
    );