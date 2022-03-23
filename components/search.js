export default function Search(props) {
  return (
    <div className="m-auto flex w-full max-w-xl">
      <span className="bg-gray-500 rounded-l-xl p-1">dateof.my/</span>
      <input
        type="text"
        placeholder="Last Name"
        className="text-sm py-1 px-2 focus:ring-2 focus:ring-gray-300 block border border-gray-300 w-full"
      ></input>
      <span className="bg-green-500 rounded-r-xl p-1">Check</span>
    </div>
  );
}
