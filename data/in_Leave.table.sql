CREATE TABLE IF NOT EXISTS in_Leave(
    id VARCHAR(220) PRIMARY KEY NOT NULL,
    date DATE NOT NULL,
    description VARCHAR(60) NOT NULL,
    status boolean default 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    emp_Id VARCHAR(220) NOT NULL,
    FOREIGN KEY(emp_Id) REFERENCES employee(id) on delete cascade
);