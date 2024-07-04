const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Bem-vindo à home page!');
});


const db = mysql.createConnection({
  host: '', // Endereço do seu servidor MySQL
  user: '', // Seu usuário do MySQL
  password: '', // Sua senha do MySQL
  database: '' // Nome do banco de dados
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM cores'; 
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "sucesso",
      "data": rows
    });
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`);
});



