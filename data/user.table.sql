CREATE TABLE IF NOT EXISTS user(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL, 
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    role_Id VARCHAR(90) NULL,
    FOREIGN KEY(role_Id) REFERENCES roles(id) on delete SET NULL
);
     