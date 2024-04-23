import pkg from 'pg';

const client = new pkg.Client({
    host: "localhost",
    user: "postgres",
    port: 5432, // 5432 / 5433
    // password: "rootUser",
    // database: "postgres"
});
// Connect to the database
client.connect()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Error connecting to database:', err));

export { client };