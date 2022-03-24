import { useState } from "react";
import Search from "../components/search";

export default function Home() {
  const [phase, setPhase] = useState("start");
  const [data, setData] = useState();
  return (
    <div className="w-full flex flex-col bg-red-200 h-screen">
      <div className="h-20 md:h-20 lg:h-40 w-full bg-red-600 md:bg-blue-400 lg:bg-green-400"></div>
      <Search
        phase={phase}
        setPhase={setPhase}
        setData={setData}
        data={data}
        key="search"
      />
    </div>
  );
}
