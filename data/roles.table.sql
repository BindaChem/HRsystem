CREATE TABLE IF NOT EXISTS roles(
    id VARCHAR(90) PRIMARY KEY NOT NULL,
    name VARCHAR(50) UNIQUE NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);




