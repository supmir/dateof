import { motion } from "framer-motion";
import { useRef } from "react";
export default function Search(props) {
  const { setPhase, phase, setData } = props;
  const queryRef = useRef();

  async function GetQuote() {
    const q = queryRef.current.value;
    if (q) {
      setPhase("loading");
      const res = await fetch(`/api/quote?q=${q}`, {
        method: "GET",
      });
      if (res.ok) {
        setData(await res.json());
        setPhase("show");
      }
    }
  }

  return (
    <motion.div
      className={`m-auto flex w-full max-w-xl ${phase === "show" && "mt-20"}`}
      layout
    >
      <div className="m-auto flex w-full max-w-xl mx-1">
        <span className="bg-gray-500 rounded-l-xl p-1">dateof.my/</span>
        <input
          ref={queryRef}
          type="text"
          placeholder="Last Name"
          className="text-sm py-1 px-2 focus:ring-2 focus:ring-gray-300 block border border-gray-300 w-full"
          onChange={() => {
            setPhase("start");
          }}
        ></input>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 rounded-r-xl p-1"
          onClick={() => {
            GetQuote();
          }}
        >
          {phase === "start"
            ? "Check"
            : phase === "loading"
            ? "Loading"
            : "Done!"}
        </motion.button>
      </div>
    </motion.div>
  );
}
