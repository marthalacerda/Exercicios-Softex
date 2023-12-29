create database trabalho4;

use trabalho4;

create table transacoes (
idTransacao int auto_increment primary key,
produto varchar(45),
categoriaProduto varchar(45),
dataTransacao date,
valorTransacao decimal(10,2)
);
insert into transacoes(produto, categoriaProduto, dataTransacao, valorTransacao) values
('maçã', 'hortifrut', '2002-1-15', 90),
('desinfetante', 'limpeza', '2003-5-20', 600),
('alface', 'hortifrut', '2004-12-12', 50),
('banana', 'hortifrut', '2005-1-15', 12),
('maçã', 'hortifrut', '2006-5-20', 300),
('peito de frango', 'carnes', '2007-12-12', 200),
('batata ruffles', 'salgadinho', '2008-1-15', 750),
('costelinha', 'carnes', '2009-5-20', 60),
('feijão', 'cereais', '2010-12-12', 120),
('condicionador', 'higiene', '2022-9-23', 100),
('queijo', 'laticinios', '2006-6-6', 154);

#########

-- 1)
select * from transacoes;

-- 2)
select 
idTransacao as 'Transação ID',
produto as 'Produto',
categoriaProduto as 'Categoria',
dataTransacao as 'Data da Transação',
valorTransacao as 'Valor(R$)'
from transacoes;

-- 3)
select
idTransacao as 'Transação ID',
produto as 'Produto',
categoriaProduto as 'Categoria',
dataTransacao as 'Data da Transação',
valorTransacao as 'Valor(R$)'
from transacoes
where valorTransacao > 100;

-- 4)
select
idTransacao as 'Transação ID',
produto as 'Produto',
categoriaProduto as 'Categoria',
dataTransacao as 'Data da Transação',
valorTransacao as 'Valor(R$)'
from transacoes
order by valorTransacao desc;

-- 5)
select
avg(valorTransacao) as 'Média das Transações',
max(valorTransacao) as 'Valor máximo',
min(valorTransacao) as 'Valor mínimo',
count(*) as 'Total de Transações'
from transacoes;

-- 6)
select
produto as 'Produto',
categoriaProduto as 'Categoria',
avg(valorTransacao) as 'Média Valor'
from transacoes
group by produto;

-- 7)
select
categoriaProduto as 'Categoria',
count(*) as 'Total de produtos vendidos',
sum(valorTransacao) as 'Valor total das vendas',
avg(valorTransacao) as 'Média de valor por transação'
from transacoes
group by categoriaProduto
order by count(categoriaProduto) desc;
