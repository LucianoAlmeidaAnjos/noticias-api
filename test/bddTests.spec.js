const request = require('supertest');
   const { expect } = require('chai');
   const app = require('../src/app');
   const Noticia = require('../src/models/noticia');

   describe('API de Notícias', () => {
     before(async () => {
       await Noticia.deleteMany({});
     });

     it('Deve criar uma nova notícia', async () => {
       const res = await request(app)
         .post('/noticias')
         .send({
           titulo: 'Título de Teste',
           descricao: 'Descrição de Teste'
         });

       expect(res.status).to.equal(201);
       expect(res.body).to.have.property('_id');
       expect(res.body).to.have.property('titulo', 'Título de Teste');
       expect(res.body).to.have.property('descricao', 'Descrição de Teste');
     });

     // Outros testes podem ser adicionados aqui...
   });