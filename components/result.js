import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import Animator from "./animator";
export default function Result(props) {
  const { setQuery } = props;
  return (
    <Animator animation="moveUp">
      <div className="fixed -mt-20" onClick={() => setQuery("")}>
        <ArrowCircleUpIcon className="block h-10 w-10 text-gray-900" />
      </div>
      <span className="border border-gray-900 rounded-l-xl p-1">
        7th March 2022
      </span>
      <span className="border border-gray-900 p-1">to</span>
      <span className="border border-gray-900 p-1">15th April 2022</span>
      <span className="border border-gray-900 p-1 flex-1">
        dateof.my/example
      </span>
      <span className="bg-green-500 rounded-r-xl p-1">Get now</span>
    </Animator>
  );
}
