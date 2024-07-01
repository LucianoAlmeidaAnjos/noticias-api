const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

let noticias = [];

app.get('/noticias', (req, res) => {
  res.json(noticias);
});

app.post('/noticias', (req, res) => {
  const noticia = {
    id: noticias.length + 1,
    titulo: req.body.titulo,
    descricao: req.body.descricao
  };
  noticias.push(noticia);
  res.status(201).json(noticia);
});

app.put('/noticias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const noticia = noticias.find(n => n.id === id);
  if (noticia) {
    noticia.titulo = req.body.titulo;
    noticia.descricao = req.body.descricao;
    res.json(noticia);
  } else {
    res.status(404).send('Notícia não encontrada');
  }
});

app.delete('/noticias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = noticias.findIndex(n => n.id === id);
  if (index !== -1) {
    noticias.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Notícia não encontrada');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});