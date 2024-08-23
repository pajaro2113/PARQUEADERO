// database.js
const { Client } = require('pg');

// Configuración de la conexión
const client = new Client({
    user: 'root',
    host: 'localhost',
    database: 'PARQUEADERO',
    password: '',
    port: 5432, // Puerto por defecto para PostgreSQL
});

// Conectar a la base de datos
client.connect()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos', err));

// Ejemplo de consulta
client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error en la consulta', err);
    } else {
        console.log('Hora actual:', res.rows[0]);
    }
    client.end(); // Cierra la conexión
});