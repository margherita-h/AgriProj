import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import DataTable from '../components/ui/DataTable';
import { fields } from '../data/fields';
import { getRiskTone } from '../utils/ndvi';

const filters = ['Tutti', 'Buono', 'Attenzione', 'Critico'];

export default function Monitoring() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Tutti');

  const rows = useMemo(() => {
    return fields.filter((field) => {
      const matchesQuery = field.name.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === 'Tutti' || (filter === 'Buono' && field.risk === 'BASSO') || (filter === 'Attenzione' && field.risk === 'MEDIO') || (filter === 'Critico' && field.risk === 'ALTO');
      return matchesQuery && matchesFilter;
    });
  }, [filter, query]);

  const columns = [
    { key: 'name', label: 'Campo' },
    { key: 'crop', label: 'Coltura' },
    { key: 'area', label: 'Superficie', render: (row) => `${row.area} ha` },
    { key: 'updatedAt', label: 'Ultima analisi' },
    { key: 'ndvi', label: 'NDVI', render: (row) => row.ndvi.toFixed(2) },
    { key: 'ndmi', label: 'NDMI', render: (row) => row.ndmi.toFixed(2) },
    { key: 'status', label: 'Stato' },
    { key: 'risk', label: 'Rischio', render: (row) => <Badge tone={getRiskTone(row.risk)}>{row.risk}</Badge> },
  ];

  return (
    <div className="page-stack">
      <section className="page-heading">
        <div>
          <p className="section-kicker">Monitoraggio</p>
          <h1>Monitoraggio dei campi</h1>
        </div>
        <input className="inline-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cerca campo" />
      </section>

      <div className="filter-row">
        {filters.map((item) => (
          <button key={item} className={`filter-chip ${filter === item ? 'is-active' : ''}`} type="button" onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>

      <Card>
        <DataTable columns={columns} rows={rows} />
      </Card>
    </div>
  );
}