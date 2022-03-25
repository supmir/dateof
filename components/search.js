import Result from "./result";
import Top from "./search/top";
import Bottom from "./search/bottom";
export default function Search(props) {
  const { phase, setPhase, data, setData } = props;

  return (
    <div className="mx-auto flex flex-col w-full max-w-xl mt-10">
      <Top />
      <Bottom setPhase={setPhase} setData={setData} phase={phase} />
      <div>{phase === "show" && <Result data={data} key="result" />}</div>
    </div>
  );
}
