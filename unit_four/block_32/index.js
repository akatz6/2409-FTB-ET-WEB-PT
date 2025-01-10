const { express, client } = require("./common");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(require("morgan")("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "This works" });
});

app.get("/getAllUsers", async (req, res, next) => {
  try {
    const SQL = `;
    SELECT * FROM users;
`;
    const response = await client.query(SQL);
    res.status(200).json(response.rows);
  } catch (error) {
    next(error);
  }
});

app.get("/getUser/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const SQL = `;
    SELECT * FROM users where id = $1;
`;
    const response = await client.query(SQL, [id]);
    res.status(200).json(response.rows);
  } catch (error) {
    next(error);
  }
});

app.post("/addUser", async (req, res, next) => {
  try {
    const { name, is_admin } = req.body;
    const SQL = `;
        INSERT INTO users(name, is_admin) VALUES($1, $2) RETURNING *;
    `;
    const response = await client.query(SQL, [name, is_admin]);
    res.status(200).json(response.rows);
  } catch (error) {
    next(error);
  }
});

app.delete("/delUser/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const SQL = `
        DELETE FROM users WHERE id = $1;
    `;
    await client.query(SQL, [id]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.put("/updateUser/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, is_admin } = req.body;
    const SQL = `
          UPDATE users 
          SET name = $1, is_admin = $2
          WHERE id = $3
          RETURNING *
      `;
    const response = await client.query(SQL, [name, is_admin, id]);
    res.status(200).json(response.rows);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, async () => {
  await client.connect();
  console.log(`I am listening on port number ${PORT}`);
});
