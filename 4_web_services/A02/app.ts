import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const porta: number = 3000;

app.use(bodyParser.json());


app.get("/", (req: Request, res: Response) => {
  res.send("Bem vinde ao meu servidor!");
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});

// array para simular banco de dados simples
const livros = [
  {id: 1, titulo: "Aprendendo TypesScript", autor: "John Doe"},
  {id: 2, titulo: "Node.js para Iniciantes", autor: "Jane Smith"},
];

app.get("/livros", (req: Request, res: Response) => {
  res.send(livros);
});
app.get("/livros/:id", (req: Request, res: Response) => {
  const livro = livros.find((liv) => liv.id === parseInt(req.params.id));
  if(!livro) {
    return res.status(404).json({mensagem: "Livro não encontrado"});
  }
  res.send(livro);
});

app.post("/livros", (req: Request, res: Response) => {
  const novoLivro = {
    id: livros.length + 1,
    titulo: req.body.titulo,
    autor: req.body.autor,
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

app.put("/livros/:id", (req: Request, res: Response) => {
  const livroIndex = livros.findIndex((liv) => liv.id === parseInt(req.params.id));
  if (livroIndex === -1) {
    return res.status(404).json({mensagem: "Livro não encontrado"});
  }
  livros[livroIndex] = {
    id: livros[livroIndex].id,
    titulo: req.body.titulo,
    autor: req.body.autor,
  };
  res.json(livros[livroIndex]);
});

app.delete("/livros/:id", (req: Request, res: Response) => {
  livros.filter((liv) => liv.id !== parseInt(req.params.id));
  res.json({mensagem: "livro removido com sucesso!"});
});
