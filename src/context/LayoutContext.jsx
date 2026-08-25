import { createContext, useContext, useMemo, useState } from 'react';

const LayoutContext = createContext(null);

export function LayoutProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const value = useMemo(
    () => ({
      sidebarOpen,
      sidebarCollapsed,
      setSidebarOpen,
      toggleSidebar: () => setSidebarOpen((current) => !current),
      toggleSidebarCollapsed: () => setSidebarCollapsed((current) => !current),
      closeSidebar: () => setSidebarOpen(false),
    }),
    [sidebarCollapsed, sidebarOpen],
  );

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within LayoutProvider');
  }
  return context;
}