CREATE TABLE IF NOT EXISTS attendence(
    id VARCHAR(220) PRIMARY KEY NOT NULL,
    date DATE NOT NULL,
    check_in TIME ,
    check_out TIME, 
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    emp_Id VARCHAR(220) NOT NULL,
    FOREIGN KEY(emp_Id) REFERENCES employee(id) on delete cascade
);





