INSERT INTO department (dept_name)
VALUES ('sales'), 
       ('engineering'), 
       ('finance'), 
       ('legal');

INSERT INTO roles (title, salary, department_id)
VALUES ('sales manager', 100000, 1),
       ('sales', 80000, 1),
       ('lead engineer', 120000, 2),
       ('software engineer', 100000, 2),
       ('account manager', 140000, 3),
       ('accountant', 120000, 3),
       ('legal lead', 160000, 4),
       ('laywer', 140000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('john', 'doe', 1, null),
       ('jane', 'doe', 2, null),
       ('tugg', 'nuggets', 3, null),
       ('jonathan', 'hamm', 4, null),
       ('richard', 'cheese', 5, null),
       ('randy', 'savage', 6, null),
       ('beyonce', 'knowles', 7, null),
       ('ketanji brown', 'jackson', 8, null),
       ('kamala', 'harris', 1, null),
       ('michelle', 'yeoh', 3, null);
    

