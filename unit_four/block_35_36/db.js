const { client } = require("./common");

const createNewUser = async (username, hashedPassword) => {
  const SQL = `
        INSERT INTO customer(username, password) VALUES($1, $2)
        RETURNING *;
    `;
  const response = await client.query(SQL, [username, hashedPassword]);
  return response.rows[0];
};

const getUser = async (username) => {
  const SQL = `
  SELECT * FROM customer WHERE username = $1
`;
  const response = await client.query(SQL, [username]);
  return response.rows[0];
};

const getCustomer = async (id) => {
  const SQL = `
  SELECT * FROM customer WHERE id = $1
`;
  const response = await client.query(SQL, [id]);
  return response.rows[0];
};
module.exports = { createNewUser, getCustomer, getUser };
