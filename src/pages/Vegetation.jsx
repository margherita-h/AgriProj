import Card from '../components/ui/Card';
import NdviChart from '../components/charts/NdviChart';
import { ndmiMonthlyData, ndviMonthlyData, vegetationTimeline } from '../data/fields';

export default function Vegetation() {
  return (
    <div className="page-stack">
      <section className="page-heading">
        <div>
          <p className="section-kicker">Vegetazione</p>
          <h1>Analisi della vegetazione</h1>
        </div>
      </section>

      <section className="dashboard-bottom-grid">
        <NdviChart data={ndviMonthlyData} title="Andamento NDVI" />
        <NdviChart data={ndmiMonthlyData} title="Andamento NDMI" />
      </section>

      <section className="two-column-grid">
        <Card>
          <div className="section-heading compact">
            <p className="section-kicker">Stato vegetazione</p>
            <h2>Confronto tra periodi</h2>
          </div>
          <p>La crescita mostra un miglioramento complessivo, con un picco in luglio e una lieve flessione da monitorare ad agosto.</p>
        </Card>
        <Card>
          <div className="section-heading compact">
            <p className="section-kicker">Timeline analisi</p>
            <h2>Storico recente</h2>
          </div>
          <div className="timeline-list">
            {vegetationTimeline.map((item) => (
              <div key={`${item.field}-${item.date}`} className="timeline-list__item">
                <strong>{item.field}</strong>
                <span>{item.date}</span>
                <span>NDVI {item.ndvi.toFixed(2)} - NDMI {item.ndmi.toFixed(2)}</span>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}