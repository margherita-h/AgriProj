export function getNdviColor(value) {
  if (value < 0.2) return '#c1121f';
  if (value < 0.35) return '#f97316';
  if (value < 0.5) return '#facc15';
  if (value < 0.65) return '#84cc16';
  if (value < 0.8) return '#22c55e';
  return '#15803d';
}

export function getRiskTone(level) {
  if (level === 'BASSO') return 'success';
  if (level === 'MEDIO') return 'warning';
  if (level === 'ALTO') return 'danger';
  return 'critical';
}