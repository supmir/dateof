import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { Fragment } from "react";
export default function Result(props) {
  const { setQuery } = props;
  const moveUp = {
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
      y: "-100vh",
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="m-auto flex w-full max-w-xl"
      variants={moveUp}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="fixed -mt-20" onClick={() => setQuery("")}>
        <ArrowCircleUpIcon className="block h-10 w-10 text-gray-900" />
      </div>
      <span className="border border-gray-900 rounded-l-xl p-1">
        7th March 2022
      </span>
      <span className="border border-gray-900 p-1">to</span>
      <span className="border border-gray-900 p-1">15th April 2022</span>
      <span className="border border-gray-900 p-1 flex-1">
        dateof.my/example
      </span>
      <span className="bg-green-500 rounded-r-xl p-1">Get now</span>
    </motion.div>
  );
}
