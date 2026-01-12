'use client';
import { motion } from 'framer-motion';

export default function Orb() {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
      
      {/* The Glass-morphism Orb */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full rounded-full border border-white/10 bg-gradient-to-br from-zinc-800/50 via-black to-zinc-900/50 backdrop-blur-3xl shadow-2xl flex items-center justify-center overflow-hidden"
      >
        {/* Inner subtle pulse */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-1/2 h-1/2 bg-blue-500/10 blur-3xl rounded-full" 
        />
        
        {/* High-end grain effect */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </motion.div>
    </div>
  );
}