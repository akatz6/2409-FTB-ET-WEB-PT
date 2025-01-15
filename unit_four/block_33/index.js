const { client } = require("./common");
const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
app.use(require("morgan")("dev"));

app.listen(PORT, async () => {
  await client.connect();
  console.log(`I am listening on port number ${PORT}`);
});

app.get("/", async (req, res, next) => {
  try {
    const SQL = `
      SELECT movies.id, movies.genre_id, genre.type, movies.name from movies
      INNER JOIN genre on movies.genre_id  = genre.id
    `;
    const response = await client.query(SQL);
    res.status(200).send(response.rows);
  } catch (error) {
    next(error);
  }
});

app.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { type } = req.body;
    let SQL = `
        update movies
        set genre_id = (SELECT id from genre where type = $2)
        WHERE id = $1
        RETURNING *
    `;
    const response = await client.query(SQL, [id, type]);

    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.post("/", async (req, res, next) => {
  try {
    const { type, name } = req.body;
    const SQL = `
          INSERT INTO movies(name, genre_id) VALUES($1, (SELECT id from genre where type = $2))
          RETURNING *
        `;
    const response = await client.query(SQL, [name, type]);
    res.status(200).send(response.rows);
  } catch (error) {
    next(error);
  }
});
