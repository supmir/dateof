import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Result from "../components/result";
import Search from "../components/search";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full h-screen flex flex-col">
      <Search query={query} setQuery={setQuery} key="search" />
      {query && <Result query={query} setQuery={setQuery} key="result" />}
    </div>
  );
}
