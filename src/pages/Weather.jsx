import Card from '../components/ui/Card';
import WeatherCard from '../components/weather/WeatherCard';
import { PrecipitationChart, TemperatureChart } from '../components/charts/WeatherChart';
import { weatherForecast, weatherSummary, weatherTrend } from '../data/weather';

export default function Weather() {
  return (
    <div className="page-stack">
      <section className="page-heading">
        <div>
          <p className="section-kicker">Meteo</p>
          <h1>Condizioni atmosferiche</h1>
        </div>
      </section>

      <section className="stat-grid stat-grid--weather">
        <WeatherCard label="Temperatura attuale" value={`${weatherSummary.current}°C`} detail={`Aggiornamento ${weatherSummary.updatedAt}`} />
        <WeatherCard label="Umidità" value={`${weatherSummary.humidity}%`} detail="Condizioni del suolo e dell'aria" />
        <WeatherCard label="Precipitazioni" value={`${weatherSummary.rain}%`} detail="Probabilità nelle prossime ore" />
      </section>

      <section className="dashboard-bottom-grid">
        <TemperatureChart data={weatherTrend} />
        <PrecipitationChart data={weatherTrend} />
      </section>

      <section className="two-column-grid">
        <Card>
          <div className="section-heading compact">
            <p className="section-kicker">Situazione attuale</p>
            <h2>{weatherSummary.condition}</h2>
          </div>
          <p>Temperatura percepita: {weatherSummary.current}°C. Vento moderato e pioggia leggera nei prossimi intervalli.</p>
        </Card>
        <Card>
          <div className="section-heading compact">
            <p className="section-kicker">Previsioni</p>
            <h2>Prossimi giorni</h2>
          </div>
          <div className="forecast-list">
            {weatherForecast.map((item) => (
              <div key={item.day} className="forecast-list__item">
                <strong>{item.day}</strong>
                <span>{item.condition}</span>
                <span>{item.min}°C / {item.max}°C</span>
                <span>Pioggia {item.rain}%</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}