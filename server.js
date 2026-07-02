const express = require('express');
const path = require('path');
const Pessoa = require('./models/Pessoa');
const { error } = require('console');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let pessoas = [];

app.get('/api/pessoas', (req, res) => {
    res.json(pessoas.map((p) => p.toJSON()));
})

app.post('/api/pessoas', (req, res) => {
    const { nome, dataNascimento } = req.body;
    if(!nome || !dataNascimento) {
        return res.status(400).json({error: 'Nome e data de nascimento são obrigatórios'});
    }
    const novaPessoa = new Pessoa(nome, dataNascimento);
    pessoas.push(novaPessoa);
    res.status(201).json(novaPessoa.toJSON());
});

app.delete('/api/pessoas/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (Number.isNaN(index) || index < 0 || index >= pessoas.length) {
        return res.status(400).json({erro: 'Pessoa não encontrada'});
    }
    pessoas.splice(index, 1);
    res.status(204).send();
});

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Porta ${PORT} já está em uso. Pare o processo que usa a porta ou escolha outra porta.`);
        process.exit(1);
    }
    console.error('Erro no servidor:', err);
    process.exit(1);
});