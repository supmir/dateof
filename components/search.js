import { motion } from "framer-motion";
import { useRef } from "react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DotsCircleHorizontalIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import {
  CheckIcon,
  DotsHorizontalIcon,
  RefreshIcon,
  SearchCircleIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
export default function Search(props) {
  const { setPhase, phase, setData } = props;
  const queryRef = useRef();
  const [q, setQ] = useState(false);

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
      className={`m-auto flex flex-col w-full max-w-xl ${
        phase === "show" && "mt-20"
      }`}
      layout
    >
      <div className="m-auto flex w-full  bg-gray-300 h-10 rounded-t-xl shadow-xl">
        <div>
          <DotsHorizontalIcon className="w-12 h-full" />
        </div>
        <div className="bg-gray-100 mt-2 px-2 rounded-t-xl w-40 flex">
          <div className="my-auto flex">
            <StarIcon className="w-4 my-auto" />
            Date of
          </div>
        </div>
      </div>
      <div className="m-auto flex w-full bg-gray-100 p-1">
        <div>
          <ArrowLeftIcon className="w-5 h-full" />
        </div>
        <div>
          <ArrowRightIcon className="w-5 h-full" />
        </div>
        <div>
          <RefreshIcon className="w-5 h-full" />
        </div>
        <div className="rounded-l-xl py-1 bg-white flex">
          <div>
            <LockClosedIcon className="w-5 h-full" />
          </div>
          <div>dateof.my/</div>
        </div>
        <div className="flex">
          <input
            ref={queryRef}
            type="text"
            placeholder=""
            className="py-1 outline-none ring-0 focus:ring-0 block w-full text-blue-500 underline"
            onChange={() => {
              setQ(true);
              setPhase("start");
            }}
          ></input>
          <div className={`absolute animate-bounce mt-3 ${q && "hidden"}`}>
            _
          </div>
        </div>
        <motion.button
          layout
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white rounded-r-xl p-1"
          onClick={() => {
            GetQuote();
          }}
        >
          {phase === "start" ? (
            <div className="flex bg-green-500 rounded-xl px-2">
              <div className="my-auto">Search</div>
              <SearchCircleIcon className="w-5 h-full my-auto" />
            </div>
          ) : phase === "loading" ? (
            <div className="flex bg-gray-500 rounded-xl px-2">
              <div className="my-auto">Loading...</div>
              <DotsCircleHorizontalIcon className="w-5 h-full animate animate-spin my-auto" />
            </div>
          ) : (
            <div className="flex bg-red-500 rounded-xl px-2">
              <div className="my-auto">Book!</div>
              <CheckCircleIcon className="w-5 h-full my-auto" />
            </div>
          )}
        </motion.button>
      </div>

      {phase !== "show" && (
        <div className="w-full h-10 bg-gradient-to-b from-white"></div>
      )}
    </motion.div>
  );
}
