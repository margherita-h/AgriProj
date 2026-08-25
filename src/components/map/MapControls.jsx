import { LocateFixed, ZoomIn, ZoomOut } from 'lucide-react';

export default function MapControls({ onZoomIn, onZoomOut, onFocus }) {
  return (
    <div className="map-controls" aria-label="Controlli mappa">
      <button type="button" className="icon-button" onClick={onZoomIn} aria-label="Zoom avanti"><ZoomIn size={16} /></button>
      <button type="button" className="icon-button" onClick={onZoomOut} aria-label="Zoom indietro"><ZoomOut size={16} /></button>
      <button type="button" className="icon-button" onClick={onFocus} aria-label="Centra mappa"><LocateFixed size={16} /></button>
    </div>
  );
}