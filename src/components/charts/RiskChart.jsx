import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function RiskChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Andamento del rischio</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
          <XAxis dataKey="month" tick={{ fill: 'rgba(226,232,240,0.7)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'rgba(226,232,240,0.7)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)' }} />
          <Bar dataKey="weather" fill="#f97316" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}