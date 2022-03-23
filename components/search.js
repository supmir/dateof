import { motion } from "framer-motion";
import { useRef } from "react";
import Animator from "./animator";
export default function Search(props) {
  const { query, setQuery } = props;
  const queryRef = useRef();
  return (
    <Animator start="top" animation="default" end="top">
      <div className="m-auto flex w-full max-w-xl mx-1">
        <span className="bg-gray-500 rounded-l-xl p-1">dateof.my/</span>
        <input
          defaultValue={query}
          ref={queryRef}
          type="text"
          placeholder="Last Name"
          className="text-sm py-1 px-2 focus:ring-2 focus:ring-gray-300 block border border-gray-300 w-full"
        ></input>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 rounded-r-xl p-1"
          onClick={() => {
            setQuery(queryRef.current.value);
          }}
        >
          Check
        </motion.button>
      </div>
    </Animator>
  );
}
