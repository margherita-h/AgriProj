import Card from './Card';

export default function StatCard({ label, value, delta, tone = 'success' }) {
  return (
    <Card className={`stat-card stat-card-${tone}`}>
      <p className="stat-card__label">{label}</p>
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__delta">{delta}</p>
    </Card>
  );
}