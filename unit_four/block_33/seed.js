const { client } = require("./common");

const seed = async () => {
  try {
    await client.connect();

    const SQL = `
        DROP TABLE IF EXISTS genre;
        CREATE TABLE genre(
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            type VARCHAR(100)
        );
        INSERT INTO genre(type) VALUES('comedy');
        INSERT INTO genre(type) VALUES('action');
        INSERT INTO genre(type) VALUES('horror');
        DROP TABLE IF EXISTS movies;
        CREATE TABLE movies(
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name VARCHAR(100),
            genre_id UUID REFERENCES genre(id) NOT NULL
        );
    
        INSERT INTO movies(name, genre_id) VALUES('Step Brothers',  (SELECT id from genre where type ='comedy'));
        INSERT INTO movies(name, genre_id) VALUES('Zombieland', (SELECT id from genre where type ='action'));
        INSERT INTO movies(name, genre_id) VALUES('Barbarian',(SELECT id from genre where type ='horror'));
        INSERT INTO movies(name, genre_id) VALUES('Then Hangover', (SELECT id from genre where type ='comedy'));
        `;
    await client.query(SQL);
    console.log("We have seeded our db");
    await client.end();
  } catch (error) {
    console.error(error);
  }
};

seed();
