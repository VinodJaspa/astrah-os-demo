'use client';
import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';

export default function LangToggle() {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <button
      onClick={() => setDir(dir === 'ltr' ? 'rtl' : 'ltr')}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-all shadow-2xl"
    >
      <Languages size={14} />
      <span>{dir === 'ltr' ? 'Switch to Arabic' : 'Switch to English'}</span>
    </button>
  );
}