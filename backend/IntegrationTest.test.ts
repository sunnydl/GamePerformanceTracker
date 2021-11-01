import app, { server } from './index'
import request from 'supertest'
import mongoose from 'mongoose'
import config from './config/config'

describe("Testing server basic functionality", () => {
    beforeAll(async() => {
        await mongoose.connect(config.mongo.url, config.mongo.options);
    })

    afterAll(async() => {
        await mongoose.connection.close();
        server.close();
    })

    test("It should respond the GET method", async() => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200);
    })
})
