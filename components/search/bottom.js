import { motion } from "framer-motion";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import {
  LockClosedIcon,
  SearchCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";
import { useState, useRef } from "react";

export default function Bottom(props) {
  const { setPhase, phase, setData, resetData } = props;

  const [q, setQ] = useState(false);
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
    <div className="m-auto flex w-full bg-gray-100 p-1 ">
      <div className="ml-3 mr-4">
        <ArrowLeftIcon className="w-5 h-full stroke-gray-400" />
      </div>
      <div className="mr-4">
        <ArrowRightIcon className="w-5 h-full stroke-gray-400" />
      </div>
      <div className="mr-4">
        <svg
          viewBox="0 0 490.563 490.563"
          className="w-4 h-full mr-2 stroke-2 fill-gray-400"
        >
          <g>
            <path
              d="M331.004,128.766c-2.1,11.4,5.2,21.8,16.6,23.9l102,17.7c12.1,1.9,20.1-6.6,22.9-17.7l17.7-102
c2.1-11.4-5.2-21.8-16.6-23.9s-21.8,5.2-23.9,16.6l-9,54.7c-45.7-60.7-117.9-97.8-195.8-97.9c-146.7,0-243.9,116.3-244.9,244.9
c-0.5,65.4,49.8,232.9,244.8,244.8c195.2,11.9,244.8-179.4,244.8-244.8c0-11.3-9.2-20.5-20.5-20.5s-20.5,9.2-20.5,20.5
c0,112.4-91.4,203.8-203.8,203.8s-203.8-91.4-203.8-203.8s91.4-203.8,203.8-203.8c63.9,0,123.3,30.1,161.4,79.3l-51.2-8.5
C343.504,109.966,333.104,117.266,331.004,128.766z"
            />
          </g>
        </svg>
      </div>
      <div className="rounded-l-xl py-1 bg-gray-200 flex">
        <div className="ml-3 mr-2">
          <LockClosedIcon className="w-5 h-full fill-gray-600" />
        </div>
        <div>dateof.my/</div>
      </div>
      <div className="flex flex-1">
        <input
          ref={queryRef}
          type="text"
          placeholder=""
          className="py-1 outline-none ring-0 focus:ring-0 block w-full text-blue-500 underline  bg-gray-200 "
          onChange={() => {
            setQ(true);
            setPhase("start");
            resetData();
          }}
        ></input>
        <div
          className={`absolute animate-bounce mt-3  bg-gray-200  ${
            q && "hidden"
          }`}
        >
          _
        </div>
      </div>
      <motion.button
        layout
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gray-200  rounded-r-xl p-1"
        onClick={() => {
          GetQuote();
        }}
      >
        {phase === "start" ? (
          <div className="flex bg-brandPrimary rounded-xl px-2">
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
  );
}
