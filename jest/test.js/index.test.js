const app = require("../src/app.js");
const request = require("supertest");

describe('GET /tasks',()=>{
    test('should respond with a 200 status code', async ()=>{
        const response = await request(app).get('/tasks').send();
        expect(response.statusCode).toBe(200);
    });

    test('should respond with an arry',async ()=>{
        const response = await request(app).get('/tasks').send()
        expect(response.body).toBeInstanceOf(Array)
    })
});
