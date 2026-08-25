export const gradientStops = [
  { label: 'Critico', color: '#c1121f' },
  { label: 'Molto basso', color: '#f97316' },
  { label: 'Basso', color: '#facc15' },
  { label: 'Medio', color: '#84cc16' },
  { label: 'Buono', color: '#22c55e' },
  { label: 'Ottimo', color: '#15803d' },
];

export function getFieldStyle(ndvi, isSelected) {
  const color = ndvi < 0.35 ? '#c1121f' : ndvi < 0.5 ? '#f97316' : ndvi < 0.65 ? '#facc15' : ndvi < 0.8 ? '#22c55e' : '#15803d';

  return {
    color: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.35)',
    weight: isSelected ? 2 : 1,
    opacity: 0.85,
    fillColor: color,
    fillOpacity: isSelected ? 0.55 : 0.42,
  };
}