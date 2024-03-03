import CurrentDetail from "./CurrentDetail";

function CurrentDisplay(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-y-4 pb-6">
      <div className="flex flex-col items-center gap-y-2 pb-3">
        <h2 className="text-4xl font-semibold tracking-tighter">
          Los Angeles <span className="text-3xl">US</span>
        </h2>
        <p className="text-center">Partly Cloudy</p>
      </div>
      <CurrentDetail />
    </div>
  );
}

export default CurrentDisplay;
