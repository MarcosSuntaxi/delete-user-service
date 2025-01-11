const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'user_database',
  port: process.env.DB_PORT || 3306
});

db.getConnection()
  .then((connection) => {
    console.log('Conexión a la base de datos exitosa');
    connection.release();
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = db;
