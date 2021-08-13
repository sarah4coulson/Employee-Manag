INSERT INTO department (name)
VALUES ("Sales"),
       ("Service"),
       ("Parts"),
       ("Accounting");

INSERT INTO role (department_id, title, salary)
VALUES (1, "Sales Manager", 40000),
       (2, "Service Advisor", 30000),
       (3, "Parts associate", 50000),
       (4, "Executive Accountant", 100000);

       
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 3, 1),
       ("Amanda", "Hemmingway", 1, 2),
       ("Katherine", "Gilbert", 2, 3),
       ("Damon", "Salvatore", 4, 4); 