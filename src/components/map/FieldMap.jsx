import { useMemo, useState } from 'react';
import { MapContainer, Polygon, Popup, TileLayer, useMap } from 'react-leaflet';
import Card from '../ui/Card';
import MapLegend from './MapLegend';
import MapControls from './MapControls';
import { fields } from '../../data/fields';
import { getFieldStyle } from './mapStyles';

function FieldMapControls({ selectedField }) {
  const map = useMap();

  const centerOnSelected = () => {
    if (selectedField?.center) {
      map.flyTo(selectedField.center, 14, { duration: 0.7 });
    }
  };

  return <MapControls onZoomIn={() => map.zoomIn()} onZoomOut={() => map.zoomOut()} onFocus={centerOnSelected} />;
}

export default function FieldMap({ variant = 'dashboard', onFieldSelect }) {
  const [selectedFieldId, setSelectedFieldId] = useState(fields[0].id);

  const selectedField = useMemo(() => fields.find((field) => field.id === selectedFieldId) ?? fields[0], [selectedFieldId]);

  const handleSelect = (field) => {
    setSelectedFieldId(field.id);
    onFieldSelect?.(field);
  };

  return (
    <Card className={`field-map field-map--${variant}`}>
      <div className="field-map__header">
        <div>
          <p className="section-kicker">Mappa campi</p>
          <h2>{variant === 'home' ? 'Campi agricoli in evidenza' : 'Monitoraggio satellitare'}</h2>
        </div>
        <MapLegend />
      </div>
      <div className="field-map__canvas">
        <MapContainer center={[45.839, 11.055]} zoom={13} scrollWheelZoom className="leaflet-map" zoomControl={false}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FieldMapControls selectedField={selectedField} />
          {fields.map((field) => (
            <Polygon
              key={field.id}
              positions={field.polygon}
              pathOptions={getFieldStyle(field.ndvi, field.id === selectedFieldId)}
              eventHandlers={{ click: () => handleSelect(field) }}
            >
              <Popup>
                <div className="map-popup">
                  <strong>{field.name}</strong>
                  <span>Coltura: {field.crop}</span>
                  <span>NDVI: {field.ndvi.toFixed(2)}</span>
                  <span>Rischio: {field.risk}</span>
                </div>
              </Popup>
            </Polygon>
          ))}
        </MapContainer>
      </div>
      <div className="field-map__footer">
        <div>
          <p className="field-map__selected">Campo selezionato</p>
          <h3>{selectedField.name}</h3>
        </div>
        <div className="field-map__metrics">
          <span>NDVI {selectedField.ndvi.toFixed(2)}</span>
          <span>NDMI {selectedField.ndmi.toFixed(2)}</span>
          <span>{selectedField.status}</span>
        </div>
      </div>
    </Card>
  );
}