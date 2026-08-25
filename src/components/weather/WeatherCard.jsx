import Card from '../ui/Card';

export default function WeatherCard({ label, value, detail }) {
  return (
    <Card className="weather-card">
      <p className="weather-card__label">{label}</p>
      <p className="weather-card__value">{value}</p>
      <p className="weather-card__detail">{detail}</p>
    </Card>
  );
}