import {
  getWeatherDescription,
  getWeatherImageName,
} from "../utilities/translateWeatherCode";
import {
  currentResultUnitData,
  locationResultData,
} from "../hooks/useFetchWeather";
import WeatherVariableDetail from "./WeatherVariableDetail";

type CurrentDisplayProps = {
  locationData: locationResultData;
  currentWeatherData: currentResultUnitData[];
  currentWeatherCode: number;
};

function CurrentDisplay({
  locationData,
  currentWeatherData,
  currentWeatherCode,
}: CurrentDisplayProps): JSX.Element {
  const weatherDescription: string =
    getWeatherDescription(currentWeatherCode) ||
    "Weather Code " + currentWeatherCode;

  return (
    <div className="flex flex-col items-center gap-y-4 pb-6">
      <div className="flex flex-col items-center gap-y-2 pb-3">
        <h2 className="text-4xl font-semibold tracking-tighter">
          {locationData.name}{" "}
          <span className="text-3xl">{locationData.country_code}</span>
        </h2>
        <p className="text-center">{`${weatherDescription}`}</p>
      </div>
      <div className="flex items-center gap-x-6">
        <img
          width="100"
          height="100"
          className="overflow-hidden rounded-full"
          src={`/weather_icons/${getWeatherImageName(currentWeatherCode) || "Block"}.svg`}
          alt={weatherDescription}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-center">
          {currentWeatherData.map((currentWeatherDatum) => (
            <WeatherVariableDetail
              key={`currentData-${currentWeatherDatum.title}`}
              currentWeatherDatum={currentWeatherDatum}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentDisplay;

// favicon https://fonts.google.com/icons?selected=Material+Symbols+Outlined:thermostat:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=forecast
// https://fonts.google.com/icons?icon.query=weather
