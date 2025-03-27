const express = require('express');
const calc = require('./util/calculadora');
const app = express();

app.get('/ola', (req, res)=>{
    res.send('Ola mundo');
})

app.get('/', (req, res)=>{
    let html = '<h1>App Calculadora</h1>';
    html += '<h3>Rotas da Calculadora</h3>';
    html += '<p>/somar/a/b</p>'
    html += '<p>/subtrair/a/b</p>'
    html += '<p>/multiplicar/a/b</p>'
    html += '<p>/dividir/a/b</p>'
    res.send(html);
})

app.get('/somar/:a/:b', (req, res) => {
    const resultado = calc.somar(Number(req.params.a), Number(req.params.b));
    res.send(`${req.params.a} + ${req.params.b} = ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const resultado = calc.subtrair(Number(req.params.a), Number(req.params.b));
    res.send(`${req.params.a} - ${req.params.b} = ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const resultado = calc.multiplicar(Number(req.params.a), Number(req.params.b));
    res.send(`${req.params.a} * ${req.params.b} = ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const resultado = calc.dividir(Number(req.params.a), Number(req.params.b));
    res.send(`${req.params.a} / ${req.params.b} = ${resultado}`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta '+PORT);
});
