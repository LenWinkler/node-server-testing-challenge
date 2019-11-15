const db = require('../data/dbConfig.js');

const { insert, remove, find } = require('../books/booksModel.js');

describe('books model', function() {
    
    describe('insert()', function() {
        beforeEach(async () => {
            await db('books').truncate();
        })

        it('should insert a new book', async function() {
            await insert({ title: "Pleasures of the Damned", author: "Charles Bukowski" })

            const books = await db('books')
            expect(books).toHaveLength(1);
        })
    })
})