import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, BarChart, Bar, Legend } from 'recharts';

export function TemperatureChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Temperatura</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
          <XAxis dataKey="label" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} />
          <Line type="monotone" dataKey="temperature" stroke="#f97316" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PrecipitationChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Precipitazioni</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
          <XAxis dataKey="label" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} />
          <Legend />
          <Bar dataKey="rain" name="Pioggia %" fill="#38bdf8" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}