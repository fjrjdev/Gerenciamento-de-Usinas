# Gerenciamento de Usinas
Este repositório contém uma aplicação frontend que permite o gerenciamento de usinas, com as operações básicas de CRUD (Criar, Ler, Atualizar e Deletar). A aplicação foi desenvolvida utilizando as tecnologias React, TypeScript, e Material UI.

## Funcionalidades
A aplicação possui as seguintes funcionalidades:

- Operações de CRUD: a aplicação permite a criação, leitura, atualização e exclusão de usinas.
  
- Validações em formulários: os formulários de criação e atualização de usinas possuem validações para garantir que os campos obrigatórios sejam preenchidos corretamente e que as informações inseridas estejam no formato correto.
  
- Proteção de rotas: as rotas da aplicação só podem ser acessadas após o usuário se autenticar com sucesso.
  
- Autenticação: a aplicação possui um sistema de autenticação simples que exige que o usuário insira suas credenciais antes de acessar as funcionalidades da aplicação.

## Como Utilizar
Esse projeto depende que API esteja em execução para funcionar corretamente: 
- [EnergiaAPI](https://github.com/fjrjdev/EnergiaAPI.git)

Para utilizar a aplicação, siga os passos abaixo:

Clone o repositório para o seu ambiente local:
```
git clone https://github.com/fjrjdev/Gerenciamento-de-Usinas.git
```
Acesse o diretório do projeto:
```
cd seu-projeto
```
Instale as dependências do projeto utilizando o NPM:
```
npm install
```
Inicie a aplicação utilizando o Vite:
```
npm run dev
```
Acesse a aplicação em seu navegador pelo endereço 
```
http://localhost:5173
```


## Dependências
```
- @emotion/react: biblioteca para criação de estilos em componentes React utilizando CSS-in-JS.
```
```
- @emotion/styled: biblioteca para criação de estilos em componentes React utilizando CSS-in-JS.
```
```
- @mui/icons-material: biblioteca de ícones para uso com o Material UI.
```
```
- @mui/material: biblioteca de componentes React baseados no Material Design.
```
```
- @mui/x-data-grid: biblioteca de tabela de dados avançada para o Material UI.
```
```
- axios: biblioteca para requisições HTTP.
```
```
- jwt-decode: biblioteca para decodificar tokens JWT.
```
```
- react-router-dom: biblioteca para gerenciamento de rotas em aplicações React.
```
```
- yup: biblioteca de validação de objetos JavaScript.
```
