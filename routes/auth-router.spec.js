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
