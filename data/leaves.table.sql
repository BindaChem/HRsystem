CREATE TABLE IF NOT EXISTS leaves (
id VARCHAR(180) PRIMARY KEY NOT NULL,
date DATE NOT NULL,
description VARCHAR(300) NOT NULL,
status boolean default 0,
empid VARCHAR(220) NOT NULL,
FOREIGN KEY (empid) REFERENCES employee(id) on delete cascade,
create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
update_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);