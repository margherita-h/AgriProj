import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import FieldMap from '../components/map/FieldMap';
import NdviChart from '../components/charts/NdviChart';
import WeatherCard from '../components/weather/WeatherCard';
import Badge from '../components/ui/Badge';
import { dashboardStats, vegetationItems } from '../data/dashboard';
import { ndviMonthlyData } from '../data/fields';
import { weatherSummary } from '../data/weather';

export default function Dashboard() {
  return (
    <div className="page-stack dashboard-page">
      <section>
        <div className="page-heading">
          <div>
            <p className="section-kicker">Dashboard</p>
            <h1>Panoramica operativa</h1>
          </div>
        </div>
        <div className="stat-grid">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="dashboard-grid">
        <Card className="vegetation-panel">
          <div className="section-heading compact">
            <p className="section-kicker">Vegetazione</p>
            <h2>Stato della vegetazione</h2>
          </div>
          <div className="vegetation-list">
            {vegetationItems.map((item) => (
              <article key={item.name} className="vegetation-list__item">
                <div className="vegetation-list__preview" />
                <div>
                  <h3>{item.name}</h3>
                  <p>Ultima analisi {item.date}</p>
                  <p>NDVI {item.ndvi.toFixed(2)} - NDMI {item.ndmi.toFixed(2)}</p>
                </div>
                <Badge tone="success">{item.status}</Badge>
              </article>
            ))}
          </div>
        </Card>

        <FieldMap variant="dashboard" />
      </section>

      <section className="dashboard-bottom-grid">
        <NdviChart data={ndviMonthlyData} />
        <Card className="stats-panel">
          <div className="section-heading compact">
            <p className="section-kicker">Statistiche della mappa</p>
            <h3>Indicatori sintetici</h3>
          </div>
          <dl className="stats-list">
            <div><dt>NDVI minimo</dt><dd>0.29</dd></div>
            <div><dt>NDVI medio</dt><dd>0.55</dd></div>
            <div><dt>NDVI massimo</dt><dd>0.76</dd></div>
            <div><dt>Ultimo aggiornamento</dt><dd>31/07/2026</dd></div>
          </dl>
        </Card>
        <WeatherCard label="Meteo" value={`${weatherSummary.current}°C`} detail={`${weatherSummary.min}°C / ${weatherSummary.max}°C | Pioggia ${weatherSummary.rain}% | Vento ${weatherSummary.wind} km/h | Umidità ${weatherSummary.humidity}%`} />
      </section>
    </div>
  );
}