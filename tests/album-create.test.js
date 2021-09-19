const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

// Dear Code Reviewer- this is as far as I could get on my own. I had a look at Jen and Ada's codes and they include a fair amount of extra stuff but I couldn't really figure out why so didn't want to add it arbitrarily. Please could you just note a few things to consider and I will have another crack at this?

describe('create album', () => {
    let db;
    beforeEach(async () => (db = await getDb())
    );

    afterEach(async () => {
        await db.query('DELETE FROM Album');
        await db.close();
    });
    describe('/album', () => {
        describe('POST', () => {
            it('creates a new album in the database', async () => {
                const res = await request(app).post('/album').send({
                name: 'Currents',
                year: '2015',
                });
    
            expect(res.status).to.equal(201); 

            const [[albumEntries]] = await db.query(
                `SELECT * FROM Album WHERE name = 'Currents'`);

                expect(albumEntries.name).to.equal('Currents');
                expect(albumEntries.genre).to.equal('2015');
            });
        });
    });
});