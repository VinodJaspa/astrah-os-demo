'use client';
import AstrahHero from '@/components/hero/AstrahHero';
import LangToggle from '@/components/ui/LangToggle';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black selection:bg-blue-500/30">
      <LangToggle />
      
      <div className="relative z-10">
        <AstrahHero />
      </div>

      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </main>
  );
}