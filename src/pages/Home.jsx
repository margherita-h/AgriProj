import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import PublicHeader from '../components/layout/PublicHeader';
import FieldMap from '../components/map/FieldMap';

const features = [
  { title: 'Vegetazione', text: 'Analisi dello stato della vegetazione tramite indicatori satellitari.' },
  { title: 'Stress idrico', text: 'Monitoraggio di possibili condizioni di stress idrico.' },
  { title: 'Meteo', text: 'Visualizzazione delle principali condizioni meteorologiche.' },
  { title: 'Rischio', text: 'Sintesi degli indicatori di rischio dei campi.' },
];

const steps = ['Seleziona il campo', 'Analizza i dati satellitari', 'Controlla la vegetazione', 'Monitora il rischio'];

function AuthMockForm({ onSubmit }) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <label>
        Nome
        <input type="text" placeholder="Nome e cognome" />
      </label>
      <label>
        Email
        <input type="email" placeholder="nome@azienda.it" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Password" />
      </label>
      <Button type="submit">Registrati</Button>
      <p className="muted-note">La registrazione sarà disponibile in una versione futura.</p>
    </form>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [authMessage, setAuthMessage] = useState('');

  const handleMockSubmit = (event) => {
    event.preventDefault();
    setAuthMessage('La registrazione sarà disponibile in una versione futura.');
  };

  return (
    <div className="public-page">
      <PublicHeader onLoginOpen={() => setLoginOpen(true)} onRegisterOpen={() => setRegisterOpen(true)} />
      <main className="public-main">
        <section className="hero">
          <p className="hero__eyebrow">AgriWatch</p>
          <h1>Benvenuti in AgriWatch</h1>
          <p className="hero__lead">Monitora i tuoi terreni, analizza la vegetazione e individua tempestivamente possibili condizioni di stress idrico.</p>
          <div className="hero__actions">
            <Button onClick={() => navigate('/dashboard')}>Vai alla Dashboard</Button>
            <Button variant="secondary" onClick={() => document.getElementById('funzionalita')?.scrollIntoView({ behavior: 'smooth' })}>Scopri AgriWatch</Button>
          </div>
        </section>

        <section className="section-block">
          <FieldMap variant="home" />
        </section>

        <section className="section-block" id="funzionalita">
          <div className="section-heading">
            <p className="section-kicker">Cosa puoi monitorare</p>
            <h2>Funzionalità principali</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <Card key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <p className="section-kicker">Come funziona</p>
            <h2>Un flusso semplice e leggibile</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <Card key={step} className="step-card">
                <span className="step-card__index">0{index + 1}</span>
                <h3>{step}</h3>
              </Card>
            ))}
          </div>
        </section>

        <section className="section-block cta-block">
          <p>Inizia a monitorare i tuoi terreni</p>
          <Button onClick={() => navigate('/dashboard')}>Apri Dashboard</Button>
        </section>

        <footer className="public-footer">AgriWatch - monitoraggio intelligente delle colture</footer>
      </main>

      <Modal open={registerOpen} title="Registrazione" onClose={() => setRegisterOpen(false)}>
        <AuthMockForm onSubmit={handleMockSubmit} />
        {authMessage ? <p className="muted-note">{authMessage}</p> : null}
      </Modal>
      <Modal open={loginOpen} title="Accesso" onClose={() => setLoginOpen(false)}>
        <form className="auth-form" onSubmit={handleMockSubmit}>
          <label>
            Email
            <input type="email" placeholder="nome@azienda.it" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <Button type="submit">Accedi</Button>
          <p className="muted-note">L’accesso sarà disponibile in una versione futura.</p>
          {authMessage ? <p className="muted-note">{authMessage}</p> : null}
        </form>
      </Modal>
    </div>
  );
}