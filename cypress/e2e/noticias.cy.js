// cypress/integration/noticias.spec.js

describe('API de Notícias', () => {
  
    it('Deve criar, atualizar e deletar uma notícia', () => {
      // Teste de inclusão (POST /noticias)
      cy.request('POST', 'http://localhost:5000/noticias', {
        titulo: 'Nova Notícia',
        descricao: 'Descrição da Nova Notícia'
      }).then(response => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.titulo).to.eq('Nova Notícia');
        expect(response.body.descricao).to.eq('Descrição da Nova Notícia');
  
        const noticiaId = response.body.id;
  
        // Teste de atualização (PUT /noticias/:id)
        cy.request('PUT', `http://localhost:5000/noticias/${noticiaId}`, {
          titulo: 'Notícia Atualizada',
          descricao: 'Descrição da Notícia Atualizada'
        }).then(response => {
          expect(response.status).to.eq(200);
          expect(response.body.id).to.eq(noticiaId);
          expect(response.body.titulo).to.eq('Notícia Atualizada');
          expect(response.body.descricao).to.eq('Descrição da Notícia Atualizada');
  
          // Teste de exclusão (DELETE /noticias/:id)
          cy.request('DELETE', `http://localhost:5000/noticias/${noticiaId}`)
            .then(response => {
              expect(response.status).to.eq(204);
            });
        });
      });
    });
  });