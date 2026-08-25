import { Bell, Search, PanelLeft, SunMoon, UserCircle2 } from 'lucide-react';
import { useLayout } from '../../context/LayoutContext';
import { useTheme } from '../../context/ThemeContext';

export default function TopBar() {
  const { toggleSidebar } = useLayout();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <button type="button" className="icon-button topbar__menu" aria-label="Apri navigazione" onClick={toggleSidebar}>
        <PanelLeft size={18} />
      </button>
      <label className="topbar__search" aria-label="Cerca">
        <Search size={16} />
        <input type="search" placeholder="Cerca campi, analisi, dati..." />
      </label>
      <div className="topbar__actions">
        <button type="button" className="icon-button" aria-label="Cambia tema" onClick={toggleTheme}>
          <SunMoon size={18} />
          <span className="sr-only">{isDark ? 'Tema chiaro' : 'Tema scuro'}</span>
        </button>
        <button type="button" className="icon-button" aria-label="Notifiche">
          <Bell size={18} />
        </button>
        <button type="button" className="icon-button" aria-label="Profilo">
          <UserCircle2 size={18} />
        </button>
      </div>
    </header>
  );
}