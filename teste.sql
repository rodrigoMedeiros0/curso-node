SHOW TABLES;

use sistemadecadastro;

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

SELECT * FROM usuarios;



INSERT INTO usuarios (nome, email, idade) VALUES(
    "Ana",
    "ana@teste.com",
    5
);

SELECT * FROM usuarios WHERE idade < 18;

DELETE FROM usuarios WHERE nome = "Ana";

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Anre Basili" && idade = 28; 

;

