"use client";

import { useEffect } from 'react';

export function ThemeScript() {
  useEffect(() => {
    // Este script será executado no cliente após a hidratação
    // para sincronizar o tema caso haja discrepâncias
    const syncTheme = () => {
      const stored = localStorage.getItem('bookshelf-ui-theme');
      const root = document.documentElement;
      
      if (!stored || stored === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', systemPrefersDark);
        root.classList.toggle('light', !systemPrefersDark);
      } else {
        root.classList.toggle('dark', stored === 'dark');
        root.classList.toggle('light', stored === 'light');
      }
    };

    syncTheme();
  }, []);

  return null;
}

// Script inline para evitar FOUC - será usado no layout
export const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('bookshelf-ui-theme');
    var root = document.documentElement;
    
    if (!stored || stored === 'system') {
      var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    } else if (stored === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (stored === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  } catch (e) {
    // Fallback para light mode em caso de erro
    document.documentElement.classList.add('light');
  }
})();
`;