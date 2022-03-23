import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
export default function Result(props) {
  return (
    <Fragment>
      <div className="fixed">
        <ArrowCircleUpIcon className="m-10 h-10 w-10 text-gray-900" />
      </div>
      <div className="m-auto flex w-full max-w-xl">
        <span className="border border-gray-900 rounded-l-xl p-1">
          7th March 2022
        </span>
        <span className="border border-gray-900 p-1">to</span>
        <span className="border border-gray-900 p-1">15th April 2022</span>
        <span className="border border-gray-900 p-1 flex-1">
          dateof.my/example
        </span>
        <span className="bg-green-500 rounded-r-xl p-1">Get now</span>
      </div>
    </Fragment>
  );
}
