const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello from CI/CD demo!"));

test("GET / returns hello", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello from CI/CD demo!");
});
