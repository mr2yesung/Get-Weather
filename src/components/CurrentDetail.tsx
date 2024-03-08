import WeatherVariableDetail from "./WeatherVariableDetail";

import { getWeatherImageName } from "../utilities/translateWeatherCode";

type CurrentDetailProps = {
  weatherDescription: string;
};

function CurrentDetail({
  weatherDescription,
}: CurrentDetailProps): JSX.Element {
  return (
    <div className="flex items-center gap-x-6">
      <img
        width="100"
        height="100"
        className="overflow-hidden rounded-full"
        src={`/${getWeatherImageName(0) || "Block"}.svg`}
        alt={weatherDescription}
      />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-center">
        <WeatherVariableDetail />
        <WeatherVariableDetail />
        <WeatherVariableDetail />
      </div>
    </div>
  );
}

export default CurrentDetail;

// https://fonts.google.com/icons?selected=Material+Symbols+Outlined:block:FILL@0;wght@400;GRAD@0;opsz@24
