import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const porta:number = 3003;

/*
app.get("/", (req: Request, res: Response) => {
  res.send('Bem vinde ao meu servidor A04!');
});
*/

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});


app.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("http://jsonplaceholder.typicode.com/todos/");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({error: "Erro ao obter dados da API"});
  }
});