export const fields = [
  {
    id: 1,
    name: 'Campo Nord',
    area: 12.4,
    crop: 'Grano',
    ndvi: 0.76,
    ndmi: 0.31,
    risk: 'BASSO',
    status: 'Vegetazione buona',
    updatedAt: '31/07/2026',
    polygon: [
      [45.842, 11.048],
      [45.846, 11.057],
      [45.841, 11.065],
      [45.836, 11.054],
    ],
    center: [45.8418, 11.056],
  },
  {
    id: 2,
    name: 'Campo Sud',
    area: 8.7,
    crop: 'Mais',
    ndvi: 0.44,
    ndmi: 0.12,
    risk: 'MEDIO',
    status: 'Attenzione stress idrico',
    updatedAt: '30/07/2026',
    polygon: [
      [45.832, 11.032],
      [45.837, 11.041],
      [45.832, 11.048],
      [45.827, 11.039],
    ],
    center: [45.832, 11.041],
  },
  {
    id: 3,
    name: 'Campo Est',
    area: 10.1,
    crop: 'Girasole',
    ndvi: 0.58,
    ndmi: 0.24,
    risk: 'ALTO',
    status: 'Vegetazione disomogenea',
    updatedAt: '29/07/2026',
    polygon: [
      [45.846, 11.063],
      [45.851, 11.071],
      [45.845, 11.078],
      [45.840, 11.069],
    ],
    center: [45.8458, 11.07],
  },
];

export const vegetationTimeline = [
  { date: '31/07/2026', field: 'Campo Nord', ndvi: 0.76, ndmi: 0.31, status: 'Vegetazione buona' },
  { date: '28/07/2026', field: 'Campo Nord', ndvi: 0.71, ndmi: 0.29, status: 'In miglioramento' },
  { date: '25/07/2026', field: 'Campo Sud', ndvi: 0.44, ndmi: 0.12, status: 'Attenzione' },
  { date: '22/07/2026', field: 'Campo Est', ndvi: 0.58, ndmi: 0.24, status: 'Monitoraggio attivo' },
];

export const ndviMonthlyData = [
  { month: 'Maggio', value: 0.42 },
  { month: 'Giugno', value: 0.51 },
  { month: 'Luglio', value: 0.63 },
  { month: 'Agosto', value: 0.68 },
];

export const ndmiMonthlyData = [
  { month: 'Maggio', value: 0.22 },
  { month: 'Giugno', value: 0.26 },
  { month: 'Luglio', value: 0.31 },
  { month: 'Agosto', value: 0.28 },
];