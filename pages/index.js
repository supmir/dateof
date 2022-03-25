import { useState } from "react";
import Search from "../components/search";

export default function Home() {
  const [phase, setPhase] = useState("start");
  const [data, setData] = useState();
  return (
    <div className="w-full flex flex-col bg-brandSecondary h-screen">
      <div className="h-20 md:h-20 lg:h-40 w-full bg-brandPrimary"></div>
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
