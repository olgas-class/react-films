import { useState } from "react";

export default function Form({ gestisciSubmit }) {
  // state del form
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const geners = ["Fantascienza", "Thriller", "Romantico", "Azione"];

  function gestisciForm(event) {
    event.preventDefault();
    gestisciSubmit(title, genre);
  }

  return (
    <section className="my-5">
      <h2>Aggiungi un nuovo film</h2>
      <form onSubmit={gestisciForm} action="">
        <label htmlFor="">Titolo</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          className="form-control"
        />

        <label htmlFor="">Genre</label>
        <select
          className="form-select"
          name=""
          id=""
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        >
          {geners.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <button className="btn btn-primary mt-3">Aggiungi</button>
      </form>
    </section>
  );
}
