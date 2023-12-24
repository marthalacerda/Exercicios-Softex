import express, { Request, Response } from "express";
import axios from "axios";
import * as crypto from "crypto";

const app = express();

const publicKey = "cdf9f20642756753d572c617a153999f";
const privateKey = "b2a50f3096eb9bd53070a8f5cb79f06140ed0ff7";

const generateHash = (ts: string) => {
  const hash = crypto.createHash('md5');
  hash.update(ts + privateKey + publicKey);
  return hash.digest('hex');
}

app.get("/", async (req, res) => {
  try {
    const ts = new Date().getTime().toString();
    const hash = generateHash(ts);

    const response = await axios.get(`http://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`);

    res.json(response.data);

  } catch (error) {
    res.status(500).json({error: "Erro ao obter dados da API da Marvel"});
  }
});

const porta: number = 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});

