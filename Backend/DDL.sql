
CREATE DATABASE Todo;

USE Todo;

CREATE TABLE Tasks (
	
	id_tarefa INT IDENTITY PRIMARY KEY NOT NULL,
	tarefa VARCHAR(20) NOT NULL,
	dataUtc DATETIME NOT NULL

);