'use client';

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className, onClick }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  // Magnetic Math: Tracks the mouse position relative to the button center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics: Smooths out the movement so it's not "jittery"
  const springConfig = { stiffness: 150, damping: 15 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Set the pull strength (0.2 makes it move 20% toward the mouse)
    x.set((clientX - centerX) * 0.2);
    y.set((clientY - centerY) * 0.2);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative px-6 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 overflow-hidden cursor-pointer";
  
  const variants = {
    primary: "bg-white text-black",
    outline: "bg-transparent border border-white/10 text-white"
  };

  return (
    <motion.button 
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      style={{ x: mouseX, y: mouseY }} 
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {/* Visual Hover States */}
      <motion.div 
        className={cn(
          "absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100",
          variant === 'primary' ? "bg-zinc-200" : "bg-white/5"
        )}
      />

      {/* The Text/Icon content */}
      <span className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>

      {/* Subtle Shine for Primary */}
      {variant === 'primary' && (
        <motion.div 
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "circIn" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent z-0 opacity-30"
        />
      )}
    </motion.button>
  );
}