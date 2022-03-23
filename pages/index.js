import { useState } from "react";
import Result from "../components/result";
import Search from "../components/search";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full h-screen flex">
      {query ? <Result setQuery={setQuery} /> : <Search setQuery={setQuery} />}
    </div>
  );
}
