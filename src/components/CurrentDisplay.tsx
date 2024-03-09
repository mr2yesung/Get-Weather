import CurrentDetail from "./CurrentDetail";

import { getWeatherDescription } from "../utilities/translateWeatherCode";
import {
  currentWeatherData,
  locationDisplayData,
} from "../hooks/useFetchWeather";

type CurrentDisplayProps = {
  locationData: locationDisplayData;
  currentWeatherData: currentWeatherData<number> & { weathercode: number };
  currentWeatherUnits: currentWeatherData<string>;
};

function CurrentDisplay({
  locationData,
  currentWeatherData,
  currentWeatherUnits,
}: CurrentDisplayProps): JSX.Element {
  const weatherDescription: string =
    getWeatherDescription(currentWeatherData.weathercode) ||
    "Weather Code " + currentWeatherData.weathercode;

  return (
    <div className="flex flex-col items-center gap-y-4 pb-6">
      <div className="flex flex-col items-center gap-y-2 pb-3">
        <h2 className="text-4xl font-semibold tracking-tighter">
          {locationData.name}{" "}
          <span className="text-3xl">{locationData.country_code}</span>
        </h2>
        <p className="text-center">{`${weatherDescription}`}</p>
      </div>
      <CurrentDetail
        weatherDescription={weatherDescription}
        currentWeatherUnits={currentWeatherUnits}
        currentWeatherData={currentWeatherData}
      />
    </div>
  );
}

export default CurrentDisplay;
