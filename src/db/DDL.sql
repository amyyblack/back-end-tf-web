CREATE TABLE diretores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  nacionalidade VARCHAR(50)
);

CREATE TABLE filmes (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  ano_lancamento INT,
  genero VARCHAR(50),
  diretor_id INT REFERENCES diretores(id),
  sinopse TEXT
);

CREATE TABLE atores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  data_nascimento DATE
);

CREATE TABLE elenco (
  id_filme INT REFERENCES filmes(id),
  id_ator INT REFERENCES atores(id),
  papel VARCHAR(80),
  PRIMARY KEY (id_filme, id_ator)
);
