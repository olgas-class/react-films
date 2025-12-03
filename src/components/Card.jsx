export default function Card({ title, genre }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5>{title}</h5>
        <p>Genere: {genre}</p>
      </div>
    </div>
  );
}
