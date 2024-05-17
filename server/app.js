const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');

const app = express();
const db = new Database('./data.db', { verbose: console.log });

app.use(cors()); // Ini memungkinkan permintaan cross-origin
app.use(express.json());

// Inisialisasi tabel jika belum ada
const setup = db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        password TEXT
    )
`);
setup.run();

// Endpoint untuk mendapatkan semua pengguna
app.get('/users', (req, res) => {
    const query = db.prepare(`SELECT * FROM users`);
    const users = query.all();
    res.json(users);
});

// Endpoint untuk membuat pengguna baru
app.post('/users', (req, res) => {
    const { username, password } = req.body;
    const insert = db.prepare(`INSERT INTO users (username, password) VALUES (?, ?)`);
    insert.run(username, password);
    res.status(201).send('User created');
});

const PORT = 3001; // Pastikan port ini tidak bertabrakan dengan port Vite
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:${PORT}");
});