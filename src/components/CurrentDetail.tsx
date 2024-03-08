import WeatherVariableDetail from "./WeatherVariableDetail";

import { getWeatherImageName } from "../utilities/translateWeatherCode";
import { currentWeatherData } from "../hooks/useFetchWeather";

type CurrentDetailProps = {
  weatherDescription: string;
  currentUnits: currentWeatherData<string>;
  currentData: currentWeatherData<number> & { weathercode: number };
};

function CurrentDetail({
  weatherDescription,
  currentUnits,
  currentData,
}: CurrentDetailProps): JSX.Element {
  return (
    <div className="flex items-center gap-x-6">
      <img
        width="100"
        height="100"
        className="overflow-hidden rounded-full"
        src={`/${getWeatherImageName(currentData.weathercode) || "Block"}.svg`}
        alt={weatherDescription}
      />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-center">
        <WeatherVariableDetail
          title="Temp"
          value={currentData.temperature_2m}
          unit={currentUnits.temperature_2m}
        />
        <WeatherVariableDetail
          title="Wind"
          value={currentData.wind_speed_10m}
          unit={currentUnits.wind_speed_10m}
        />
        <WeatherVariableDetail
          title="Humidity"
          value={currentData.relative_humidity_2m}
          unit={currentUnits.relative_humidity_2m}
        />
      </div>
    </div>
  );
}

export default CurrentDetail;

// https://fonts.google.com/icons?selected=Material+Symbols+Outlined:block:FILL@0;wght@400;GRAD@0;opsz@24
