const { client } = require("./common");

const seed = async () => {
  try {
    await client.connect();

    const SQL = `
      DROP TABLE IF EXISTS customer CASCADE;
      CREATE TABLE customer(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username VARCHAR(25) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      )
   `;
    await client.query(SQL);
    console.log("We have seeded our db");
    await client.end();
  } catch (error) {
    console.error(error);
  }
};

seed();

// DROP TABLE IF EXISTS customer CASCADE;
// DROP TABLE IF EXISTS movies CASCADE;
//    CREATE TABLE genre(
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   type VARCHAR(100)
// );
//   CREATE TABLE movies(
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   name VARCHAR(100) UNIQUE
// );
//  CREATE TABLE movies_user(
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   customer_id UUID REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
//   movie_id UUID REFERENCES movies(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
//   CONSTRAINT unique_customer_id_movie_id UNIQUE (customer_id, movie_id)
// );
// INSERT INTO movies(name) VALUES('The Bounty Hunter');
// INSERT INTO movies(name) VALUES('Zombieland');
// INSERT INTO movies(name) VALUES('Men Who Stare At Goats');
// INSERT INTO movies(name) VALUES('Goonies');
