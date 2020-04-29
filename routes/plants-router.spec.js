const server = require("../api/server");
const request = require("supertest");
const db = require('../database/dbConfig');

describe('plants-router.js', () => {
    afterEach(async () => {
      await db('users').truncate();
    });

describe("GET all plants", () => {
  it("Returns 200 OK", async () => {
    const formData = { username: 'david', password: '123', phone_number: '(123)456-7810' }
    return request(server)
      .post("/api/auth/register")
      .send(formData)
      .then(res => {
        return request(server)
        .post('/api/auth/login')
        .send(formData)
        .then(res => {
            const token = res.body.token
            console.log(token)
            return request(server)
            .get('/api/1/plants')
            .set({ token })
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    });
})


describe('plants model', function() {

    describe('test environment', function() {
        it('should use the testing environment', function() {
          expect(process.env.DB_ENV).toBe('testing');
        })
      })
    })  
}) 
}) 
