import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  className?: string;
  distance?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  direction = "up",
  className = "",
  distance = 36,
  ...props
}: RevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "scale":
        return { opacity: 0, scale: 0.94 };
      case "none":
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth custom cubic bezier for modern premium feel
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
