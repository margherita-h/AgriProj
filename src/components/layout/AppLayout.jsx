import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useLayout } from '../../context/LayoutContext';

export default function AppLayout() {
  const { sidebarCollapsed } = useLayout();

  return (
    <div className={`app-shell ${sidebarCollapsed ? 'app-shell--collapsed' : ''}`}>
      <Sidebar />
      <div className="app-shell__content">
        <TopBar />
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}