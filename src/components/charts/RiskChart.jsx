import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function RiskChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Andamento del rischio</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
          <XAxis dataKey="month" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} />
          <Bar dataKey="weather" fill="#f97316" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}