import bodyParser from "body-parser";
import express, { Request, Response} from "express";


const app = express();
app.use(bodyParser.json());
const port = 3000;

// array para simular banco de dados simples
let usuarios = [
  {id: 1, nome: "Fulado de Tal"},
  {id: 2, nome: "Beltrano de Silva"},
];

// rota para listar todos os usuários
app.get("/usuarios", (req: Request, res: Response) => {
  try {
    res.send(usuarios);    
  } catch (error) {
    res.status(404).json({mensagem: "Lista de usuários não foi encontrada."});
  }
});

// rota para detalhe de um usuário por id
app.get("/usuarios/:id", (req: Request, res: Response) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if(!usuario) {
    return res.status(404).json({mensagem: "Usuário não encontrado"});
  }
  res.json(usuario);
});

// rota para adicionar usuario
app.post("/usuarios", (req: Request, res: Response) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome,
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// rota para atualizar usuario
app.put("/usuarios/:id", (req: Request, res: Response) => {
  const usuarioIndex = usuarios.findIndex((u) => u.id === parseInt(req.params.id));
  if (usuarioIndex === -1) {
    return res.status(404).json({mensagem: "Usuário não encontrado"});
  }
  usuarios[usuarioIndex] = {
    id: usuarios[usuarioIndex].id,
    nome: req.body.nome
  };
  res.json(usuarios[usuarioIndex]);
});

// rota para deletar usuario por id
app.delete("/usuarios/:id", (req: Request, res: Response) => {
  usuarios = usuarios.filter((u) => u.id !== parseInt(req.params.id));
  res.json({mensagem: "usuario removido com sucesso!"});
});

// rota para saudação personalisada
app.get("/saudacao/:nome", (req:Request, res: Response) => {
  const {nome} = req.params;
  res.send(`Seja bem vinde, ${nome}!!`)

});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
