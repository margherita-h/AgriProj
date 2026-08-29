import { useLocation, NavLink } from 'react-router-dom';
import { LayoutDashboard, CloudSun, Radar, Sprout, TriangleAlert, Menu } from 'lucide-react';
import { useLayout } from '../../context/LayoutContext';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/weather', label: 'Meteo', icon: CloudSun },
  { to: '/monitoring', label: 'Monitoraggio', icon: Radar },
  { to: '/vegetation', label: 'Vegetazione', icon: Sprout },
  { to: '/risk', label: 'Rischio', icon: TriangleAlert },
];

export default function Sidebar() {
  const { sidebarOpen, sidebarCollapsed, closeSidebar, toggleSidebarCollapsed } = useLayout();
  const location = useLocation();

  return (
    <>
      <aside className={`sidebar ${sidebarCollapsed ? 'sidebar--collapsed' : ''} ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__brand">
          <button
            className="icon-button sidebar__collapse"
            type="button"
            aria-label={sidebarCollapsed ? 'Espandi navigazione' : 'Comprimi navigazione'}
            aria-expanded={!sidebarCollapsed}
            onClick={toggleSidebarCollapsed}
          >
            <Menu size={18} />
          </button>
          <div>
            <p className="sidebar__name">AgriWatch</p>
            <p className="sidebar__tag">Monitoraggio intelligente delle colture</p>
          </div>
        </div>
        <nav className="sidebar__nav" aria-label="Navigazione principale">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}
              title={sidebarCollapsed ? label : undefined}
              onClick={closeSidebar}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar__footer">{location.pathname}</div>
      </aside>
      {sidebarOpen ? <button type="button" className="sidebar-backdrop" aria-label="Chiudi navigazione" onClick={closeSidebar} /> : null}
    </>
  );
}