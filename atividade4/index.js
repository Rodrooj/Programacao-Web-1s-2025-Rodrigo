const express = require('express');
const estoque = require('./estoque');
const app = express();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>';
    html += '<h3>Rotas Disponíveis</h3>';
    html += '<p>/adicionar/:id/:nome/:qtd - Adiciona um produto ao estoque</p>';
    html += '<p>/listar</p> - Lista todos os produtos do estoque';
    html += '<p>/remover/:id</p> Remove um produto do estoque';
    html += '<p>/editar/:id/:qtd Edita a quantidade de um produto em estoque</p>';

    res.send(html);
})

//adicionar
app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    const item = {
        id: Number(req.params.id),
        nome: req.params.nome,
        qtd: Number(req.params.qtd)
    }

    res.send(item);
})

//listar
app.get('/listar', (req, res)=>{
    res.send(estoque.listar())
})

//editar
app.get('/remover/:id', (req, res)=>{
    const id = Number(req.params.id);
})

//remover
app.get('/editar/:id/:qtd', (req, res)=>{
    const id = Number(req.params.id);
    const qtd = Number(req.params.qtd);
})

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});