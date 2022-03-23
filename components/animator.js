import { motion } from "framer-motion";
export default function Animator(props) {
  const { animation, children } = props;
  const animations = {
    moveUp: {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: "0.5",
          // damping: 1,
          // stiffness: 10,
        },
      },
      exit: {
        y: "100vh",
        opacity: 0,
      },
    },
    moveDown: {
      hidden: {
        y: "100vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: "0.5",
          // damping: 1,
          // stiffness: 10,
        },
      },
      exit: {
        y: "-100vh",
        opacity: 0,
      },
    },
  };
  return (
    <motion.div
      className="m-auto flex w-full max-w-xl"
      variants={animations[animation]}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
