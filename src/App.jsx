import React from 'react';
import DesktopView from './DesktopView';
import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-noir-950 text-champagne-100 font-sans">
        <DesktopView />
      </div>
    </StoreProvider>
  );
}

export default App;
