import { motion } from "framer-motion";

// Small reusable wrapper that fades + slides content up as it enters the viewport.
// Usage: <Reveal delay={0.1}><YourContent /></Reveal>
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
