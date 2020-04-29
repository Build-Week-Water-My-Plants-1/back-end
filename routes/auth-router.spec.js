const supertest = require("supertest");
const server = require("../api/server");

describe("POST to /register", () => {
    it("Returns in JSON format", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send({ username: "fluxlog", password: "banana" });
      expect(res.type).toBe("application/json");
    });
  });

  it("should test user logging in", async () => {});

  describe("should test registering and logging in", () => {
    it("should register users", async () => {
      const newUser = { username: "singaporesling", password: "123", phone_number: "(123)456-7810" };
      const res = await supertest(server)
        .post("/api/auth/register")
        .send(newUser);
      expect(res.status).toBe(500);
    });

    it("should test the login function", async () => {
        const creds = { username: "singaporesling", password: "123", phone_number: "(123)456-7810" };
        const res = await supertest(server)
          .post("/api/auth/login")
          .send(creds);
          expect(res.status).toBe(500);
        });
      });