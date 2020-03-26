const request = require('supertest');

const { insert, remove, find } = require('../books/booksModel.js');

const server = require('./server.js');

describe('server', function() {

    describe('GET /api/books', function() {

        it('should return 200 OK', function() {
            return request(server)
            .get('/api/books')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })

        it('should return json', function() {
            return request(server)
            .get('/api/books')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })
    })

    describe('POST /api/books', function() {

        it('should return 201 OK', function() {
            return request(server)
            .post('/api/books')
            .send({ title: "House of Leaves", author: "Mark Danielewski"})
            .set('Accept', 'application/json')
            .expect(function(res) {
                res.status = 201
            })
        })

        it('should return json', function() {
            return request(server)
            .post('/api/books')
            .send({ title: "Some Book", author: "Mark Danielewski"})
            .set('Accept', 'application/json')
            .expect(function(res) {
                res.type = /json/i
            })
        })
    })

})