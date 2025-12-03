import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

const initialMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [search, setSearch] = useState("");

  const geners = ["Fantascienza", "Thriller", "Romantico", "Azione"];

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(
        movies.filter((curMovie) => curMovie.title.includes(search))
      );
    } else {
      setFilteredMovies(
        movies.filter(
          (movie) =>
            movie.genre === selectedGenre && movie.title.includes(search)
        )
      );
    }
  }, [selectedGenre, movies, search]);

  function createNewMovie(title, genre) {
    const newMovie = {
      title,
      genre,
    };
    setMovies([...movies, newMovie]);
  }

  return (
    <>
      <div className="container">
        <h2>Lista di film</h2>
        <div className="my-3">
          <select
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            <option value="">Tutti</option>
            {geners.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            type="search"
            className="form-control my-3"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {filteredMovies.map((movie, index) => (
            <div className="col" key={index}>
              <Card title={movie.title} genre={movie.genre} />
            </div>
          ))}
        </div>

        <Form gestisciSubmit={createNewMovie} />
      </div>
    </>
  );
}

export default App;
