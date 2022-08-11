CREATE TABLE IF NOT EXISTS employee(
    id VARCHAR(220) PRIMARY KEY NOT NULL,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    phone_number VARCHAR(60) NOT NULL,
    address VARCHAR(250) NOT NULL, 
    salary INT NOT NULL,
    join_date VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    designationId VARCHAR(100) NULL,
    departmentId VARCHAR(80) NULL,
    userId VARCHAR(100) NULL,
    FOREIGN KEY(designationId) REFERENCES designation(id) on delete SET NULL,
    FOREIGN KEY(departmentId) REFERENCES department(id) on delete SET NULL,
    FOREIGN KEY(userId) REFERENCES user(id) on delete SET NULL
);
