import UpcomingDayDetail from "./UpcomingDayDetail";

import {
  dailyResultUnitData,
  dailyWeatherDataCategory,
} from "../hooks/useFetchWeather";

type UpcomingDisplayProps = {
  dailyWeatherData: dailyResultUnitData[];
  dailyWeatherUnits: dailyWeatherDataCategory<string>;
  isVisible: boolean;
};

function UpcomingDisplay({
  dailyWeatherData,
  dailyWeatherUnits,
  isVisible,
}: UpcomingDisplayProps): JSX.Element {
  return (
    <table className="relative w-full caption-bottom overflow-auto">
      <tbody className={`text-sm ${isVisible ? "visible" : "invisible"}`}>
        {dailyWeatherData.map((dayWeatherDatum) => (
          <UpcomingDayDetail
            key={`dailyData-${dayWeatherDatum.time}`}
            dayWeatherDatum={dayWeatherDatum}
            dailyWeatherUnits={dailyWeatherUnits}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UpcomingDisplay;
