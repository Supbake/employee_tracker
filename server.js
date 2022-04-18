const mysql = require('mysql2');
const inquirer = require('inquirer');

//creating connection to mysql
const connection = mysql.createConnection(
    {
        host: 'localhost',
        PORT: 3001,
        user: 'root',
        password: 'Google1@',
        database: 'employees',
    }
);

// starting connection 
connection.connect(function (err) {
    if (err)
        throw err;
    start();
});

// start function that gives choices to user
function start() {
    inquirer.prompt({
        name: 'main',
        type: 'list',
        message: 'Main Menu',
        choices: [
            'View All Employees',
            'View All Departments',
            'View All Roles',
            'Add Employee',
            'Add Department',
            'Add Role',
            'Update Employee Role',
            'EXIT'
        ]
    })
        //switch function to preform function w/coenciding selction
        .then(function (answer) {
            switch (answer.main) {
                case 'View All Employees': viewEmp();
                    console.log('employee list', viewEmp())
                    break;
                case 'View All Departments': viewDept();
                    break;
                case 'View All Roles': viewRole();
                    break;
                case 'Add Employee': addEmp();
                    break;
                case 'Add Department': addDept();
                    break;
                case 'Add Role': addRole();
                    break;
                case 'Update Employee Role': updateEmp();
                    break;
                case 'EXIT': connection.end();
                    break;
            }
        });
};

function viewEmp() {
    connection.query('SELECT * FROM employee', function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    }
    );
};

function viewDept() {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw (err);
        console.table(res);
        start();
    });
};

function viewRole() {
    connection.query('SELECT * FROM roles', function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
};

function addEmp() {
    let questions = [
        {
            type: 'input',
            message: 'Employee First Name',
            name: 'first_name'
        },
        {
            type: 'input',
            message: 'Employee Last Name',
            name: 'last_name'
        },
        {
            type: 'input',
            message: 'Employee Role',
            name: 'role_id'
        },
        {
            type: 'input',
            message: 'Employee Manager',
            name: 'manager_id'
        },
    ];

    // to updage employees manager
    function updateEmpMgr(empID, roleID) {
        connection.query('UPDATE employee SET role_id = ? WHERE employee_id = ?', [roleID, empID])
    };

    inquirer.prompt(questions).then(function (answer) {
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
            },
            function (err) {
                if (err) throw err;
                updateEmpMgr(answer.role_id, answer.manager_id);
                viewEmp();
            }
        );
    });

    ;
}
function addDept() {
    inquirer.prompt(
        {
            type: 'input',
            message: 'Name of Department',
            name: 'department'
        }
    )
    then(function (answer) {
        console.log(answer.department);
        connection.query("INSERT INTO department SET ?",
            {
                name: answer.department,
            },
            function (err, res) {
                if (err) throw err;
                start();
            });
    });
};

function addRole() {
    let questions = [
        {
            type: 'input',
            message: 'What Role would you like to Add?',
            name: 'role'
        },
        {
            type: 'input',
            message: 'Which Department is this Role in? ',
            name: 'department'
        },
        {
            type: 'input',
            message: 'Salary for this Role',
            name: 'salary'
        },
    ];
    inquirer.prompt(questions).then(function (answer) {
        connection.query(
            "INSERT INTO role SET ?",
            {
                title: answer.title,
                department_id: answer.department_id,
                salary: answer.salary,
            },
            function (error, res) {
                if (error) throw error;
                start();
            }
        );
    });
};

function updateEmp() {
    let employee = viewEmp();
    let empChoices = employee.map(index => {
        id: id;
    })
    inquirer.prompt(
        {
            type: 'list',
            message: 'Which role would you like to assign this Employee?',
            name: 'role_id',
            choices: empChoices
        })
    connection.query('UPDATE employee SET role_id = ? WJERE employee_id = ?', [roleID, empID])
};
