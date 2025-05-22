const express = require('express');
const mustache = require('mustache-express');
const path = require('path');
const app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', path.join(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/agendar_consulta', (req, res) => {
    const dados = req.body;
    let erro_form = false;
    let campos_invalidos = [];

    const campos_obrigatorios = [
        'nome', 'sobrenome', 'cpf', 'data_nascimento', 'telefone',
        'cep', 'endereco', 'clinica', 'especialista', 'data_consulta', 'hora_consulta'
    ];

    campos_obrigatorios.forEach(campo => {
        if (!dados[campo] || dados[campo].trim() === '') {
            erro_form = true;
            campos_invalidos.push(campo);
        }
    });

    // Verifica se a data e hora da consulta são posteriores ao momento atual
    if (!erro_form) {
        const agora = new Date();
        const dataHoraConsulta = new Date(`${dados.data_consulta}T${dados.hora_consulta}`);
        if (dataHoraConsulta <= agora) {
            erro_form = true;
            campos_invalidos.push('data_consulta');
        }
    }

    if (erro_form) {
        return res.render('index.html', {
            erro_form,
            campos_invalidos,
            dados
        });
    }

    // Simula sucesso
    res.send(`<h2>Agendamento realizado com sucesso!</h2>
              <a href="/">Voltar</a>`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
