import CurrentDetail from "./CurrentDetail";

import { getWeatherDescription } from "../utilities/translateWeatherCode";

function CurrentDisplay(): JSX.Element {
  const weatherDescription: string =
    getWeatherDescription(0) || "Weather Code " + 100;

  return (
    <div className="flex flex-col items-center gap-y-4 pb-6">
      <div className="flex flex-col items-center gap-y-2 pb-3">
        <h2 className="text-4xl font-semibold tracking-tighter">
          Los Angeles <span className="text-3xl">US</span>
        </h2>
        <p className="text-center">{`${weatherDescription}`}</p>
      </div>
      <CurrentDetail weatherDescription={weatherDescription} />
    </div>
  );
}

export default CurrentDisplay;
