import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Result from "../components/result";
import Search from "../components/search";

export default function Home() {
  const [phase, setPhase] = useState("start");
  const [data, setData] = useState();
  return (
    <div className="w-full h-screen flex flex-col">
      <Search
        phase={phase}
        setPhase={setPhase}
        setData={setData}
        key="search"
      />
      {phase === "show" && <Result data={data} key="result" />}
    </div>
  );
}
