import { LocationMarkerIcon, PlusCircleIcon } from "@heroicons/react/solid";
import Animator from "./animator";
export default function Result(props) {
  const { data } = props;

  return (
    <Animator start="bottom" animation="default" end="bottom">
      <div className="bg-white max-w-xl w-full rounded-b-xl">
        <div className="flex w-full gap-y-2 flex-col">
          <div className="mx-auto flex flex-col">
            <div className="p-1 text-center italic">Event Date</div>
            <div className="border rounded-xl p-1">15 April 2022</div>
          </div>
          <table className="max-w-sm mx-auto w-full">
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
          <div className="text-2xl underline">Price:</div>
          <table className="">
            <tbody>
              {data.items.map(({ id, name, desc, price }) => (
                <tr
                  key={id}
                  className="border-y first:border-t-0 last:border-b-0"
                >
                  <td className="text-left text-xl">{name}</td>
                  <td className="text-right italic text-md">{desc}</td>
                  <td className="text-right text-lg">RM{price}</td>
                </tr>
              ))}
              <tr
                key="id"
                className="border-y first:border-t-0 last:border-b-0"
              >
                <td className=""></td>
                <td className="text-right text-xl text-bold">Total</td>
                <td className="text-right text-lg">RM{data.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Animator>
  );
}
