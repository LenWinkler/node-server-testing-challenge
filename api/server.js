const express = require('express');

const Books = require('../books/booksModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/api/books', (req, res) => {
    Books.find()
    .then(books => {
        res.status(200).json(books)
    })
    .catch(err => {
        res.status(500).json('error getting books', err)
    })
})

server.post('/api/books', (req, res) => {
    const book = req.body;
    Books.insert(book)
        .then(added => {
            res.status(201).json(added)
        })
        .catch(err => {
            res.status(500).json('error adding book', err)
        })
})

server.delete('/api/books', (req, res) => {
    Books.remove(req.body.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json('error deleting book', err)
        })
})

module.exports = server;