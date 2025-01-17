const { client } = require("./common");
const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
app.use(require("morgan")("dev"));
const { getMoviesWithGenre, changeMovieGenre, deleteGenre } = require("./db");

app.get("/getAll", async (req, res, next) => {
  try {
    res.status(200).json(await getMoviesWithGenre());
  } catch (error) {
    next(error);
  }
});

app.put("/changeGenre/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { oldGenre, newGenre } = req.body;
    res.status(200).json(await changeMovieGenre(id, oldGenre, newGenre));
  } catch (error) {
    next(error);
  }
});

app.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteGenre(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
app.listen(PORT, async () => {
  await client.connect();
  console.log(`I am listening on port number ${PORT}`);
});
