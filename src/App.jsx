import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Weather from './pages/Weather';
import Monitoring from './pages/Monitoring';
import Vegetation from './pages/Vegetation';
import Risk from './pages/Risk';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/vegetation" element={<Vegetation />} />
        <Route path="/risk" element={<Risk />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}