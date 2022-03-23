import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Result from "../components/result";
import Search from "../components/search";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full h-screen flex flex-col">
      <AnimatePresence
        // initial={false}
        exitBeforeEnter={true}
        // onExitComplete={() => null}
      >
        {!query ? (
          <Search setQuery={setQuery} key="search" />
        ) : (
          <Result setQuery={setQuery} key="result" />
        )}
      </AnimatePresence>
    </div>
  );
}
