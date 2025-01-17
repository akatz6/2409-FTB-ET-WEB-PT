const { client } = require("./common");

const getMoviesWithGenre = async () => {
  const SQL = `
      SELECT movies.name, genre.type, movies.id as movie_id, genre.id as genre_id
    FROM movies
    INNER JOIN movies_genre on movies_genre.movie_id = movies.id
    INNER JOIN genre on genre.id =movies_genre.genre_id
    `;
  const response = await client.query(SQL);
  return response.rows;
};

const changeMovieGenre = async (id, oldGenre, newGenre) => {
  const SQL = `
    update movies_genre
    SET genre_id = (SELECT id from genre where type = $3)
    WHERE genre_id = (SELECT id from genre where type = $2)
    AND movie_id = $1
    RETURNING *
  `;
  const response = await client.query(SQL, [id, oldGenre, newGenre]);
  return response.rows;
};

const deleteGenre = async (id) => {
  const SQL = `
    DELETE from genre
    WHERE id = $1
  `;
  const response = await client.query(SQL, [id]);
  return response.rows;
};

module.exports = { getMoviesWithGenre, changeMovieGenre, deleteGenre };
