import React from 'react';
import { useStore } from '../context/useStore';

export default function ToastNotification() {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[140] max-w-sm pointer-events-none transition-all duration-300">
      <div className="bg-noir-900/95 border border-champagne-500/40 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-champagne-100">
        <span className="w-2 h-2 rounded-full bg-champagne-400 animate-ping flex-shrink-0"></span>
        <span className="text-xs font-light tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
}
