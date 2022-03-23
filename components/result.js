import Animator from "./animator";
export default function Result(props) {
  const { data } = props;

  return (
    <Animator start="bottom" animation="default" end="bottom">
      <div className="mt-20 flex w-full max-w-xl mx-1 gap-y-2 flex-col">
        <div className="w-full flex">
          <div className="border border-gray-900 rounded-l-xl p-1">
            {data.start}
          </div>
          <div className="border border-gray-900 p-1">to</div>
          <div className="border border-gray-900 p-1">{data.end}</div>
          <div className="border border-gray-900 p-1 flex-1">
            dateof.my/{data.query}
          </div>
          <div className="bg-green-500 rounded-r-xl p-1">Book</div>
        </div>
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
            <tr key="id" className="border-y first:border-t-0 last:border-b-0">
              <td className=""></td>
              <td className="text-right text-xl text-bold">Total</td>
              <td className="text-right text-lg">RM{data.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Animator>
  );
}
