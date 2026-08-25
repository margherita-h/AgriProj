import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import StatCard from '../components/ui/StatCard';
import RiskChart from '../components/charts/RiskChart';
import { riskFields, riskOverview, riskTrend } from '../data/risk';

export default function Risk() {
  return (
    <div className="page-stack">
      <section className="page-heading">
        <div>
          <p className="section-kicker">Rischio</p>
          <h1>Analisi del rischio</h1>
        </div>
      </section>

      <section className="stat-grid stat-grid--risk">
        {riskOverview.map((item) => (
          <StatCard key={item.label} label={item.label} value={`${item.value}%`} delta={item.level} tone={item.level === 'BASSO' ? 'success' : item.level === 'MEDIO' ? 'warning' : 'danger'} />
        ))}
      </section>

      <section className="dashboard-bottom-grid">
        <RiskChart data={riskTrend} />
        <Card>
          <div className="section-heading compact">
            <p className="section-kicker">Campi a rischio</p>
            <h2>Elenco sintetico</h2>
          </div>
          <div className="risk-list">
            {riskFields.map((field) => (
              <div key={field.name} className="risk-list__item">
                <div>
                  <strong>{field.name}</strong>
                  <p>{field.crop}</p>
                  <span>{field.note}</span>
                </div>
                <Badge tone={field.risk === 'BASSO' ? 'success' : field.risk === 'MEDIO' ? 'warning' : 'danger'}>{field.risk}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}