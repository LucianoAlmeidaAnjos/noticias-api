const express = require('express');
const router = express.Router();
const {
  criarNoticia,
  listarNoticias,
  encontrarNoticiaPorId,
  atualizarNoticia,
  deletarNoticia
} = require('../models/Noticia');

// GET /noticias - Listar todas as notícias
router.get('/', (req, res) => {
  res.json(listarNoticias());
});

// GET /noticias/:id - Obter uma notícia por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const noticia = encontrarNoticiaPorId(id);
  if (noticia) {
    res.json(noticia);
  } else {
    res.status(404).json({ error: 'Notícia não encontrada' });
  }
});

// POST /noticias - Criar uma nova notícia
router.post('/', (req, res) => {
  const { titulo, descricao } = req.body;
  if (!titulo || !descricao) {
    res.status(400).json({ error: 'Título e descrição são obrigatórios' });
  } else {
    const noticia = criarNoticia(titulo, descricao);
    res.status(201).json(noticia);
  }
});

// PUT /noticias/:id - Atualizar uma notícia por ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, descricao } = req.body;
  const noticia = atualizarNoticia(id, titulo, descricao);
  if (noticia) {
    res.json(noticia);
  } else {
    res.status(404).json({ error: 'Notícia não encontrada' });
  }
});

// DELETE /noticias/:id - Deletar uma notícia por ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  deletarNoticia(id);
  res.status(204).end();
});

module.exports = router;