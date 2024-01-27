import { motion } from "framer-motion";

const volumeVariants = {
  initial: { opacity: 0, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.99 },
};

const volumeMotionProps = {
  variants: volumeVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: {
    y: { duration: 0.2 },
    opacity: { duration: 0.2 },
  },
};

const Volume = ({ className, children }) => {
  return (
    <motion.article {...volumeMotionProps} className={`volume ${className}`}>
      {children}
    </motion.article>
  );
};

export default Volume;
