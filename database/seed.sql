\c todo_app

DELETE FROM tasks;

INSERT INTO tasks (subject, content, due_date) 
VALUES ('Vacuum', 'clean the apt', TO_DATE('05-30-2018', 'MM DD YY')),
('Book vacation', 'think beaches', TO_DATE('05-30-2018', 'MM DD YY'));