import { StarIcon, XIcon } from "@heroicons/react/solid";
export default function Top(props) {
  return (
    <div className="m-auto flex w-full  bg-gray-300 h-10 rounded-t-xl shadow-xl">
      <div className="mx-5 flex my-auto">
        {[
          { fill: "#fca5a5", stroke: "#b91c1c" },
          { fill: "#fdba74", stroke: "#c2410c" },
          { fill: "#c2410c", stroke: "#059669" },
        ].map(({ fill, stroke }) => (
          <svg
            fill={fill}
            stroke={stroke}
            viewBox="0 0 120 120"
            className="w-3 h-3 mr-2 stroke-2"
          >
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="60"
              cy="60"
              r="54.167"
              stroke-linecap="round"
              // stroke-linejoin="round"
            />
          </svg>
        ))}
      </div>
      <div className="bg-gray-100 mt-2 px-2 rounded-t-xl w-60 flex justify-between  stroke-gray-200">
        <div className="flex">
          <StarIcon className="w-4 my-auto" />
          <div className="my-auto">Date of my...</div>
        </div>
        <XIcon className="w-4 my-auto" />
      </div>
    </div>
  );
}
