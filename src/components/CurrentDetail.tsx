import WeatherVariableDetail from "./WeatherVariableDetail";

function CurrentDetail(): JSX.Element {
  return (
    <div className="flex items-center gap-x-6">
      <img width="100" height="100" className="overflow-hidden rounded-full" />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-center">
        <WeatherVariableDetail />
        <WeatherVariableDetail />
        <WeatherVariableDetail />
      </div>
    </div>
  );
}

export default CurrentDetail;
