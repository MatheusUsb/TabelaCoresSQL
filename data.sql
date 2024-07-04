CREATE DATABASE meu_banco_de_dados;

USE meu_banco_de_dados;

CREATE TABLE cores (
    id INT PRIMARY KEY,
    nome VARCHAR(50)
);

INSERT INTO cores (id, nome) VALUES (1, 'Azul');
INSERT INTO cores (id, nome) VALUES (2, 'Branco');
INSERT INTO cores (id, nome) VALUES (3, 'Vermelho');

SELECT * FROM cores;

exit;

