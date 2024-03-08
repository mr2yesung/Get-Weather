import CurrentDetail from "./CurrentDetail";

import { getWeatherDescription } from "../utilities/translateWeatherCode";
import {
  currentWeatherData,
  locationDisplayData,
} from "../hooks/useFetchWeather";

type CurrentDisplayProps = {
  location: locationDisplayData;
  currentData: currentWeatherData<number> & { weathercode: number };
  currentUnits: currentWeatherData<string>;
};

function CurrentDisplay({
  location,
  currentData,
  currentUnits,
}: CurrentDisplayProps): JSX.Element {
  const weatherDescription: string =
    getWeatherDescription(currentData.weathercode) ||
    "Weather Code " + currentData.weathercode;

  return (
    <div className="flex flex-col items-center gap-y-4 pb-6">
      <div className="flex flex-col items-center gap-y-2 pb-3">
        <h2 className="text-4xl font-semibold tracking-tighter">
          {location.name}{" "}
          <span className="text-3xl">{location.country_code}</span>
        </h2>
        <p className="text-center">{`${weatherDescription}`}</p>
      </div>
      <CurrentDetail
        weatherDescription={weatherDescription}
        currentUnits={currentUnits}
        currentData={currentData}
      />
    </div>
  );
}

export default CurrentDisplay;
