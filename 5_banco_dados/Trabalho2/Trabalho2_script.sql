# 1) Crie um banco de dados chamado "BlogDB"

create database BlogDB;
use BlogDB;

# 2) Crie as tabelas a seguir
# 3) Definir integridade referencial

# b) Autor
create table Autor (
AutorID int auto_increment primary key,
Nome_do_autor varchar(45) not null,
Email varchar(45) default ''
);

# a) Post
create table Post (
PostID int auto_increment primary key,
Titulo varchar(45) default '',
Conteudo varchar(2000) not null,
Data_de_publicacao date not null,
AutorID int default null,
constraint fk_post_tem_um_autor foreign key (AutorID) references Autor(AutorID)
);


# c) Comentario
create table Comentario (
ComentarioID int auto_increment primary key,
Texto_do_comentario varchar(200) not null,
Data_do_comentario date not null,
AutorID int default null,
PostID int not null,
constraint fk_autor_escreve_varios_post foreign key (AutorID) references Autor(AutorID),
constraint fk_post_aceita_varios_comentarios foreign key (PostID) references Post(PostID)
);
