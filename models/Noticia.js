let noticias = [];
let nextId = 1;

class Noticia {
  constructor(titulo, descricao) {
    this.id = nextId++;
    this.titulo = titulo;
    this.descricao = descricao;
  }
}

function criarNoticia(titulo, descricao) {
  const noticia = new Noticia(titulo, descricao);
  noticias.push(noticia);
  return noticia;
}

function listarNoticias() {
  return noticias;
}

function encontrarNoticiaPorId(id) {
  return noticias.find(noticia => noticia.id === id);
}

function atualizarNoticia(id, titulo, descricao) {
  const index = noticias.findIndex(noticia => noticia.id === id);
  if (index !== -1) {
    noticias[index].titulo = titulo;
    noticias[index].descricao = descricao;
    return noticias[index];
  }
  return null;
}

function deletarNoticia(id) {
  noticias = noticias.filter(noticia => noticia.id !== id);
}

module.exports = {
  Noticia,
  criarNoticia,
  listarNoticias,
  encontrarNoticiaPorId,
  atualizarNoticia,
  deletarNoticia
};