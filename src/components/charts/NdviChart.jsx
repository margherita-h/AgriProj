import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function NdviChart({ data, dataKey = 'value', labelKey = 'month', title = 'Andamento NDVI' }) {
  return (
    <div className="chart-card">
      <div className="chart-card__header">
        <p className="section-kicker">Grafici</p>
        <h3>{title}</h3>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="ndvi-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
          <XAxis dataKey={labelKey} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 1]} />
          <Tooltip contentStyle={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} />
          <Area type="monotone" dataKey={dataKey} stroke="#22c55e" strokeWidth={2} fill="url(#ndvi-gradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}