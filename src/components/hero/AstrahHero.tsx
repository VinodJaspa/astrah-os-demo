'use client';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Orb from './Orb';
import { ArrowRight } from 'lucide-react';

export default function AstrahHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-18 overflow-hidden">

            {/*  LEFT/START SIDE: Copywriting & Actions */}
            <div className="z-10 text-start md:w-1/2 space-y-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                            Enterprise Execution Layer
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] text-white ltr:tracking-tighter rtl:tracking-normal">
                        Astrah <br />
                        <span className="text-zinc-500">Business OS.</span>
                    </h1>

                    <p className="max-w-lg text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                        A high-fidelity operating system designed for the next era of enterprise.
                        Native performance meets defensive engineering.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button variant="primary">
                            Deploy Astrah <ArrowRight size={16} className="rtl:rotate-180" />
                        </Button>
                        <Button variant="outline">
                            Technical Specs
                        </Button>
                    </div>
                </motion.div>

                {/* Technical Metadata Footer */}
                <div className="pt-12 flex gap-12 border-t border-white/5">
                    <div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Latency</p>
                        <p className="text-sm text-white font-mono">&lt;12ms</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Integrity</p>
                        <p className="text-sm text-white font-mono">99.99%</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Localization</p>
                        <p className="text-sm text-white font-mono">Native RTL</p>
                    </div>
                </div>
            </div>

            {/* RIGHT/END SIDE: The Visual Identity */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="md:w-1/2 flex justify-center items-center mt-16 md:mt-0"
            >
                <Orb />
            </motion.div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/4 -start-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}