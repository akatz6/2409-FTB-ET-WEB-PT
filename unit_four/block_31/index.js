const e = require("express");
const express = require("express");
const app = express();
const PORT = 3000;
const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/test_db"
);

app.listen(PORT, async () => {
  console.log(`I am listening on port number ${PORT}`);
  try {
    await client.connect();
    const SQL = `DROP TABLE IF EXISTS users;
     CREATE TABLE users(
      id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(100),
      is_admin BOOLEAN DEFAULT FALSE 
    );
        INSERT INTO users(name, is_admin) VALUES('Fred', true);
        INSERT INTO users(name, is_admin) VALUES('Rebecca', true);
        INSERT INTO users(name) VALUES('Larry');
        INSERT INTO users(name) VALUES('Hunter');
    `;
    await client.query(SQL);
  } catch (error) {
    console.error(error);
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is my first route" });
});

app.get("/getAllUsers", async (req, res) => {
  try {
    const SQL = `;
        SELECT * FROM users;
    `;
    const response = await client.query(SQL);
    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
  }
});

const start = () => {
  console.log("This is my start method");
};

start();
