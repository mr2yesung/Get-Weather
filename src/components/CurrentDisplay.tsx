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
  isVisible: boolean;
};

function CurrentDisplay({
  locationData,
  currentWeatherData,
  currentWeatherCode,
  isVisible,
}: CurrentDisplayProps): JSX.Element {
  const weatherDescription: string =
    getWeatherDescription(currentWeatherCode) ||
    "Weather Code " + currentWeatherCode;

  return (
    <div
      className={`flex flex-col items-center gap-y-4 pb-6 ${isVisible ? "visible" : "invisible"}`}
    >
      <div className="flex flex-col items-center gap-y-2 pb-3 lg:gap-y-4 lg:pb-6 xl:gap-y-2 xl:pb-3">
        <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl xl:text-4xl">
          {locationData.name}{" "}
          <span className="text-3xl md:text-4xl xl:text-2xl">
            {locationData.country_code}
          </span>
        </h2>
        <p className="text-center md:text-xl lg:text-2xl xl:text-lg">{`${weatherDescription}`}</p>
      </div>
      <div className="flex items-center gap-x-6 md:gap-x-9 lg:gap-x-20 xl:gap-x-9">
        <img
          className="h-[100px] w-[100px] overflow-hidden rounded-full md:h-[120px] md:w-[120px] lg:h-[140px] lg:w-[140px] xl:h-[100px] xl:w-[100px]"
          src={`/weather_icons/${getWeatherImageName(currentWeatherCode) || "Block"}.svg`}
          alt={weatherDescription}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-center md:gap-x-5 lg:gap-x-10 xl:gap-x-4">
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
