const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '', // Endereço do seu servidor MySQL
  user: '', // Seu usuário do MySQL
  password: '', // Sua senha do MySQL
  database: '' // Nome do banco de dados
});

connection.connect(error => {
  if (error) throw error;
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
});

module.exports = connection;