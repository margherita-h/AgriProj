import { gradientStops } from './mapStyles';

export default function MapLegend() {
  return (
    <div className="map-legend" aria-label="Legenda NDVI">
      <span className="map-legend__label">Bassa vegetazione</span>
      <div className="map-legend__bar">
        {gradientStops.map((stop) => (
          <span key={stop.color} style={{ background: stop.color }} title={stop.label} />
        ))}
      </div>
      <span className="map-legend__label">Alta vegetazione</span>
    </div>
  );
}