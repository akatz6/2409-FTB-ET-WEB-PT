const { client } = require("./common");

const seed = async () => {
  try {
    await client.connect();

    const SQL = `

    DROP TABLE IF EXISTS genre CASCADE;
    DROP TABLE IF EXISTS movies CASCADE;
    DROP TABLE IF EXISTS movies_genre;
      CREATE TABLE genre(
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      type VARCHAR(100)
    );
      CREATE TABLE movies(
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(100)
    );
     CREATE TABLE movies_genre(
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      genre_id UUID REFERENCES genre(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
      movie_id UUID REFERENCES movies(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL
    );
  
    INSERT INTO genre(type) VALUES('comedy');
    INSERT INTO genre(type) VALUES('action');
    INSERT INTO genre(type) VALUES('horror');
    INSERT INTO genre(type) VALUES('romance');
 
    INSERT INTO movies(name) VALUES('The Bounty Hunter');
    INSERT INTO movies(name) VALUES('Zombieland');
    INSERT INTO movies_genre(genre_id, movie_id) 
    VALUES((SELECT id from genre where type ='comedy'),
     (SELECT id from movies where name ='The Bounty Hunter'));
     INSERT INTO movies_genre(genre_id, movie_id) 
    VALUES((SELECT id from genre where type ='action'),
     (SELECT id from movies where name ='The Bounty Hunter'));
     INSERT INTO movies_genre(genre_id, movie_id) 
    VALUES((SELECT id from genre where type ='romance'),
     (SELECT id from movies where name ='The Bounty Hunter'));
            INSERT INTO movies_genre(genre_id, movie_id) 
    VALUES((SELECT id from genre where type ='horror'),
     (SELECT id from movies where name ='Zombieland'));
      INSERT INTO movies_genre(genre_id, movie_id) 
    VALUES((SELECT id from genre where type ='comedy'),
     (SELECT id from movies where name ='Zombieland'));
            INSERT INTO movies_genre(genre_id, movie_id) 
    VALUES((SELECT id from genre where type ='action'),
     (SELECT id from movies where name ='Zombieland'));
        `;
    await client.query(SQL);
    console.log("We have seeded our db");
    await client.end();
  } catch (error) {
    console.error(error);
  }
};

seed();
