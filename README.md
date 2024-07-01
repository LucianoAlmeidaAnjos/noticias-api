# Minha API de Notícias

API RESTful em Node.js para gerenciar notícias.

## Requisitos
Node.js (versão 14 ou superior)

npm (versão 6 ou superior)

## Instalação

Clone o repositório e instale as dependências:

git clone https://github.com/LucianoAlmeidaAnjos/noticias-api
cd noticias-api
npm install

## Executar Localmente

npm start

## Executar com o Docker

docker build -t api-noticias .
docker run -p 5000:5000 api-noticias

# Endpoints da API

## Criar Notícia

URL: /noticias
Método: POST
Corpo da Requisição
{
  "titulo": "Título da Notícia",
  "descricao": "Descrição da Notícia"
}

Resposta de Sucesso:

Código: 201
Corpo:
    {
    "id": "unique_id",
    "titulo": "Título da Notícia",
    "descricao": "Descrição da Notícia"
    }

## Listar Notícias
URL: /noticias
Método: GET
Resposta de Sucesso:
Código: 200
Corpo:
    [
        {
            "id": "unique_id",
            "titulo": "Título da Notícia",
            "descricao": "Descrição da Notícia"
        }
    ]

## Atualizar Notícia

URL: /noticias/:id
Método: PUT
Corpo da Requisição:
    {
        "titulo": "Título Atualizado",
        "descricao": "Descrição Atualizada"
    }

Resposta de Sucesso:
Código: 200
Corpo:
    {
        "id": "unique_id",
        "titulo": "Título Atualizado",
        "descricao": "Descrição Atualizada"
    }

## Deletar Notícia
URL: /noticias/:id
Método: DELETE
Resposta de Sucesso:
Código: 204

## Configuração do Cypress
1 - Instale o Cypress

npm install --save-dev cypress

2 - Abra o Cypress

npx cypress open

3 - Escolha "E2E Testing" na interface do Cypress

Na interface do Cypress, selecione 'noticias.cy.js' para executar os testes.
