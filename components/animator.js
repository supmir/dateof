import { motion } from "framer-motion";
export default function Animator(props) {
  const { start, animation, end, children } = props;
  const locations = {
    top: {
      y: "-100vh",
      opacity: 0,
    },
    bottom: {
      y: "100vh",
      opacity: 0,
    },
  };
  const animations = {
    default: {
      y: "0",
      opacity: 1,
      transition: {
        duration: "0.1",
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };
  return (
    <motion.div
      className="m-auto flex w-full max-w-xl"
      initial={locations[start]}
      animate={animations[animation]}
      exit={locations[end]}
    >
      {children}
    </motion.div>
  );
}
