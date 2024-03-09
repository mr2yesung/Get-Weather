import { dailyWeatherData } from "../hooks/useFetchWeather";
import { getDayName } from "../utilities/getDayName";
import UpcomingDayDetail from "./UpcomingDayDetail";

type UpcomingDisplayProps = {
  dailyWeatherData: {
    time: string[];
    weathercode: number[];
  } & dailyWeatherData<number[]>;
  dailyWeatherUnits: dailyWeatherData<string>;
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
        {dailyWeatherData.time.map((day, i) => (
          <UpcomingDayDetail
            key={`dailyData-${day}`}
            dayName={getDayName(day)}
            dailyWeatherUnits={dailyWeatherUnits}
            dayWeatherData={{
              weatherCode: dailyWeatherData.weathercode[i],
              maxTemp: dailyWeatherData.temperature_2m_max[i],
              minTemp: dailyWeatherData.temperature_2m_min[i],
            }}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UpcomingDisplay;
