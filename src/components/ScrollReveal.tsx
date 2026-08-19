'use client';

import React from 'react';
import { motion, UseInViewOptions } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: UseInViewOptions['amount'];
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.45,
  distance = 20,
  className = '',
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // smooth easeOut — lighter on mobile
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Container for staggered children animations
export function ScrollStagger({
  children,
  className = '',
  staggerChildren = 0.08,
  delayChildren = 0,
  once = true,
  amount = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: UseInViewOptions['amount'];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Child item for ScrollStagger
export function ScrollStaggerItem({
  children,
  direction = 'up',
  distance = 18,
  className = '',
  duration = 0.4,
}: {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  className?: string;
  duration?: number;
}) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      transition={{
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
