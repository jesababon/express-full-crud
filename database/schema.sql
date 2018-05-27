-- DROP DATABASE tasks;
DROP TABLE IF EXISTS tasks;
-- CREATE DATABASE tasks;
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    to_do VARCHAR(255),
    entry_date DATE,
    due_date DATE
    );