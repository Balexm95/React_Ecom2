const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// connecting to the database and checking for errors if any are present
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'aaabbb123',
    database: 'vintees'
});

db.connect((err) => {
    if(err) {
        console.log(err) ;
    } else {
        console.log("db connection successful!")
    }
});

app.use(cors());
app.use(express.json());



app.get('/api/products', (req, res) => {
    db.query(`SELECT * FROM vintees.products`, (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});


app.listen(3000, () => {
    console.log(`Console server listening on port 3000.`)
});