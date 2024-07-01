# Dockerfile

# Use a imagem base do Node.js
FROM node:latest

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte para o diretório de trabalho
COPY . .

# Exponha a porta 5000
EXPOSE 5000

# Comando padrão para iniciar a aplicação
CMD ["node", "index.js"]