const getConnection = require('./db/connection');
//const express = require('express');
//const app = express();
const consTable = require('console.table');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

async function helpme () {
 const query= 'SELECT * FROM department';
 const connec = await getConnection();
 const [rows, fields] = await connec.query(query);
 const conn = consTable.getTable(rows);
 console.log(conn);
 console.log(rows);
 console.log(fields);
};

helpme();

async function role () {
const query= 'SELECT * FROM role';
const connec = await getConnection();
 const [rows, fields] = await connec.query(query);
 const conn = consTable.getTable(rows);
 console.log(conn);
 console.log(rows);
 console.log(fields);
};

// Express middleware
/*app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/movies', (req, res) => {
    getQuery('SELECT * FROM movies;', req, res);
});

app.post('/api/add-movie', async (req, res) => {

    const { movie_name } = req.body;

    const conn = await getConnection();
    try {
        const result = await conn.query('INSERT INTO movies(movie_name) VALUES(?)', movie_name);
        console.log(result);
        res.json(result);
    } catch (err) {
        res.json(err);
    } finally {
        conn.end();
    }
});

app.post('/api/add-review/:movie_id', async (req, res) => {
    const { movie_id } = req.params;
    const { review } = req.body;

    const conn = await getConnection();
    try {
        const result = await conn.query('INSERT INTO reviews(movie_id, review) VALUES(?, ?)', [movie_id, review]);
        console.log(result);
        res.json(result);
    } catch (err) {
        res.json(err);
    } finally {
        conn.end();
    }
});

app.get('/api/reviews', (req, res) => {
    getQuery('SELECT * FROM reviews;', req, res);
});

app.delete('/api/movie/:id', async (req, res) => {
    const { id } = req.params;

    const conn = await getConnection();
    try {
        const result = await conn.query('DELETE FROM movies WHERE id = ?', id);
        res.json(result);
    } catch (err) {
        res.json(err);
    } finally {
        conn.end();
    }
});

app.get('/api/movie/:id', async (req, res) => {
    const { id } = req.params;
    getQuery('SELECT m.movie_name, r.review FROM movies m LEFT JOIN reviews r ON m.id = r.movie_id WHERE m.id = ?', req, res, id);
});

app.listen(PORT, () => console.log(`lsitening on port ${PORT}`));*/

