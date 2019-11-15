const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    remove,
    find
}

async function insert(book) {
    return db('books').insert(book, 'id').then(([id]) => {
        return db('books')
        .where({ id })
        .first()
    }
)}

async function remove(id) {
    return db('books')
        .where({ id })
        .del()
        }

async function find() {
    return db('books')
}