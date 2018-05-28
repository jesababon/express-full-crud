\c todo_app

DELETE FROM tasks;

INSERT INTO tasks (subject, content, due_date) 
VALUES ('Vacuum', 'clean the apt','2018-05-30'),
('Book vacation', 'think beaches','2018-08-01');