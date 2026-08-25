import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function PublicHeader({ onLoginOpen, onRegisterOpen }) {
  return (
    <header className="public-header">
      <div>
        <Link to="/" className="public-header__brand">AgriWatch</Link>
      </div>
      <nav className="public-header__nav" aria-label="Navigazione pubblica">
        <a href="#funzionalita">Funzionalità</a>
      </nav>
      <div className="public-header__actions">
        <Button variant="ghost" onClick={onLoginOpen}>Accedi</Button>
        <Button variant="primary" onClick={onRegisterOpen}>Registrati</Button>
      </div>
    </header>
  );
}