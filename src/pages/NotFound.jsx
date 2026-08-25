import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Pagina non trovata</h1>
      <Link className="btn btn-primary" to="/dashboard">
        Torna alla Dashboard
      </Link>
    </div>
  );
}