import request, { Response } from "supertest";
import app from "../app";

describe("404", () => {
  test("/GET/404", async () => {
    const resp: Response = await request(app).get("/404");
    expect(resp.status).toBe(404);
  });
  test("/POST/404", async () => {
    const resp: Response = await request(app).post("/404");
    expect(resp.status).toBe(404);
    expect(resp.body.message).toBe("Resource not found");
  });
});
