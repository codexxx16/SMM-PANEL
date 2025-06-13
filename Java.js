const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smm_panel'
});

app.post('/order', (req, res) => {
    const { user_id, service, quantity } = req.body;
    db.query('INSERT INTO orders (user_id, service, quantity) VALUES (?, ?, ?)', 
        [user_id, service, quantity], 
        (err, result) => {
            if (err) throw err;
            res.send('Order placed successfully!');
        }
    );
});

app.listen(3000, () => console.log('Server running on port 3000'));
