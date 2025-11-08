-- Diretores
INSERT INTO diretores (nome, nacionalidade) VALUES
('Fernando Meirelles', 'Brasileiro'),
('Anna Muylaert', 'Brasileira'),
('José Padilha', 'Brasileiro');

-- Filmes
INSERT INTO filmes (titulo, ano_lancamento, genero, diretor_id, sinopse) VALUES
('Cidade de Deus', 2002, 'Drama', 1, 'Baseado em fatos reais sobre o crescimento do crime organizado no Rio de Janeiro.'),
('Que Horas Ela Volta?', 2015, 'Drama', 2, 'Uma empregada doméstica vive entre o trabalho e o vínculo distante com a filha.'),
('Tropa de Elite', 2007, 'Ação', 3, 'A rotina intensa do BOPE no combate ao crime no Rio.');

-- Atores
INSERT INTO atores (nome, data_nascimento) VALUES
('Wagner Moura', '1976-06-27'),
('Regina Casé', '1954-02-25'),
('Alexandre Rodrigues', '1983-05-21');

-- Elenco
INSERT INTO elenco (id_filme, id_ator, papel) VALUES
(1, 3, 'Buscapé'),
(2, 2, 'Val'),
(3, 1, 'Capitão Nascimento');
