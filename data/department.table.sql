CREATE TABLE IF NOT EXISTS department (
    id VARCHAR(80) PRIMARY KEY, 
    name VARCHAR(240) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    parent_department VARCHAR(255) NULL,
    FOREIGN KEY(parent_department) REFERENCES department(id) on delete SET NULL
    );
    