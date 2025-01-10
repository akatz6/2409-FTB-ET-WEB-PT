const { client } = require("./common");

const seed = async () => {
  try {
    await client.connect();
    const SQL = `DROP TABLE IF EXISTS users;
        CREATE TABLE users(
         id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
         name VARCHAR(100),
         is_admin BOOLEAN DEFAULT FALSE 
       );
           INSERT INTO users(name) VALUES('Fred');
           INSERT INTO users(name, is_admin) VALUES('Rebecca', true);
           INSERT INTO users(name) VALUES('Larry');
           INSERT INTO users(name, is_admin) VALUES('Hunter', true);
       `;
    await client.query(SQL);
    await client.end();
    console.log("We have data");
  } catch (error) {
    console.log(error);
  }
};

seed();
