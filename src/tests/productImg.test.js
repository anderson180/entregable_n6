const request = require("supertest")
const app = require('../app')
const path = require('path')

let TOKEN
let imageId

const BASE_URL = '/api/v1/product_images'
const BASE_URL_USERS = '/api/v1/users'

beforeAll(async () => {
  const user = {
    email: "javier@email.com",
    password: "7124",
  }
  const res = await request(app)
    .post(`${BASE_URL_USERS}/login`)
    .send(user)

  TOKEN = res.body.token
})


test("POST -> 'BASE_URL', async() should return status code 201, res.body.url, res.body.filename to be Defined", async () => {

  const localImage = path.join(__dirname, 'createData', 'RIKESA-CHEDDAR.png')

  const res = await request(app)
    .post(BASE_URL)
    .set("Authorization", `Bearer ${TOKEN}`)
    .attach('image', localImage)

  imageId = res.body.id

  expect(res.status).toBe(201)
  expect(res.body.url).toBeDefined()
  expect(res.body.filename).toBeDefined()
})

test("Delete, 'BASE_URL', should return statusCode 204", async () => {
  const res = await request(app)
    .delete(`${BASE_URL}/${imageId}`)
    .set("Authorization", `Bearer ${TOKEN}`)

  expect(res.statusCode).toBe(204)
})