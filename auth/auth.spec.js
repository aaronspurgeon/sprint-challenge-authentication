const db = require("../database/dbConfig");
const userModel = require("../users/users-model");

beforeEach(async () => {
  await db.seed.run();
});

describe("user model", () => {
  test("add", async () => {
    await userModel.add({
      username: "billy",
      password: "pass123"
    });
    const user = await db("users").select();
    expect(user).toHaveLength(1);
  });
});
