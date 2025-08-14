
import { motion } from "framer-motion";
import { Link } from 'wouter';
import React from 'react';

type V = "bounceGlow" | "rippleBlue" | "pop" | "press" | "tilt";

const variants = {
  pop: { whileTap: { scale: 0.96 }, whileHover: { scale: 1.02 } },
  press: { whileTap: { scale: 0.97, boxShadow: "0 6px 18px rgba(0,0,0,.12)" } },
  tilt: { whileHover: { rotate: -1, y: -2 } },
  bounceGlow: {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.95, boxShadow: "0 0 0 8px rgba(139,0,0,.12)" }
  },
  rippleBlue: { whileTap: { scale: 0.98, boxShadow: "0 0 0 10px rgba(14,165,165,.14)" } }
};

interface ClickableProps {
  variant?: V;
  as?: keyof JSX.IntrinsicElements | typeof Link;
  children: React.ReactNode;
  [key: string]: any;
}

export function Clickable({ variant = "pop", as = "button", children, ...props }: ClickableProps) {
  const MotionComponent = motion(as as any);
  
  return (
    <MotionComponent {...variants[variant]} {...props}>
      {children}
    </MotionComponent>
  );
}
