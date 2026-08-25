export const riskOverview = [
  { label: 'Rischio siccità', value: 42, level: 'MEDIO' },
  { label: 'Rischio vegetazione', value: 28, level: 'BASSO' },
  { label: 'Rischio meteo', value: 67, level: 'ALTO' },
  { label: 'Rischio complessivo', value: 59, level: 'ALTO' },
];

export const riskFields = [
  { name: 'Campo Sud', crop: 'Mais', risk: 'MEDIO', note: 'Ridurre l’esposizione allo stress idrico' },
  { name: 'Campo Est', crop: 'Girasole', risk: 'ALTO', note: 'Controllare l’omogeneità della copertura' },
  { name: 'Campo Nord', crop: 'Grano', risk: 'BASSO', note: 'Condizioni stabili' },
];

export const riskTrend = [
  { month: 'Maggio', dryness: 20, vegetation: 15, weather: 30 },
  { month: 'Giugno', dryness: 28, vegetation: 18, weather: 42 },
  { month: 'Luglio', dryness: 35, vegetation: 25, weather: 58 },
  { month: 'Agosto', dryness: 42, vegetation: 28, weather: 67 },
];