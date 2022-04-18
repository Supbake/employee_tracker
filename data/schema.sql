DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
    department_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR (30) NOT NULL
);

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL (10, 2) NOT NULL,
    department_id INT,
    -- CONSTRAINT fk_department
    FOREIGN KEY (department_id) 
    REFERENCES department(department_id) 
    ON DELETE CASCADE
);

CREATE TABLE employee (
    employee_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT, 
    manager_id INT NULL,
    -- CONSTRAINT fk_role
    FOREIGN KEY (role_id)
    REFERENCES roles(role_id)
    ON DELETE SET NULL,
    -- CONSTRAINT fk_manager
    FOREIGN KEY (manager_id)
    REFERENCES employee(employee_id)
    ON DELETE CASCADE 
);


