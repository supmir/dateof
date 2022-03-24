export default function PriceBubble(props) {
  const { name, desc, price, premium } = props.item;

  return (
    <div className="mx-auto w-4/5 mt-2">
      <div
        className={`flex justify-between rounded-xl p-4  ${
          premium
            ? "bg-purple-500 hover:ring-4 ring-black"
            : "bg-gray-300 hover:ring-2 ring-black"
        }`}
      >
        <div className="my-auto">
          <div className="text-xl">{name}</div>
          <div className="italic">{desc}</div>
        </div>
        <div className="my-auto">{price}</div>
      </div>
    </div>
  );
}
