import { LocationMarkerIcon, PlusCircleIcon } from "@heroicons/react/solid";
import Animator from "./animator";
import PriceBubble from "./priceBubble";
export default function Result(props) {
  const { data } = props;

  return (
    <Animator start="bottom" animation="default" end="bottom">
      <div className="bg-white max-w-xl w-full rounded-b-xl py-6">
        <div className="flex w-full flex-col">
          <div className="mx-auto flex flex-col">
            <div className="p-1 text-center italic">Event Date</div>
            <div className="border rounded-xl p-1">15 April 2022</div>
          </div>
          <table className="max-w-sm mx-auto w-full mt-2">
            <tbody>
              <tr className="">
                <td className="italic">Begin</td>
                <td></td>
                <td className="italic">Event Month</td>
              </tr>
              <tr className="">
                <td className="flex border border-r-0 rounded-l-xl">
                  <PlusCircleIcon className="my-auto w-5 h-full" />

                  <div>{data.start}</div>
                </td>
                <td className="border-y text-center italic">until</td>
                <td className="flex border border-l-0 rounded-r-xl">
                  <LocationMarkerIcon className="my-auto w-5 h-full" />
                  <div className="my-auto">{data.end}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col w-full mt-2">
            {data.items.map((item) => (
              <PriceBubble key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Animator>
  );
}
