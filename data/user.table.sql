CREATE TABLE IF NOT EXISTS user(
id VARCHAR(200) PRIMARY KEY NOT NULL,
username VARCHAR(220) NOT NULL,
email VARCHAR(240) NOT NULL UNIQUE, 
password VARCHAR(220) NOT NULL,
roleid VARCHAR(200) NULL,
FOREIGN KEY (roleid) REFERENCES role(id) on delete SET null,
create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
update_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);