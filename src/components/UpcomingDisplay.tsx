import { dailyWeatherData } from "../hooks/useFetchWeather";
import { getDayName } from "../utilities/getDayName";
import UpcomingDayDetail from "./UpcomingDayDetail";

type UpcomingDisplayProps = {
  dailyData: {
    time: string[];
    weathercode: number[];
  } & dailyWeatherData<number[]>;
  dailyUnits: dailyWeatherData<string>;
  isVisible: boolean;
};

function UpcomingDisplay({
  dailyData,
  dailyUnits,
  isVisible,
}: UpcomingDisplayProps): JSX.Element {
  return (
    <table className="relative w-full caption-bottom overflow-auto">
      <tbody className={`text-sm ${isVisible ? "visible" : "invisible"}`}>
        {dailyData.time.map((day, i) => (
          <UpcomingDayDetail
            key={`dailyData-${day}`}
            dayName={getDayName(day)}
            units={dailyUnits}
            data={{
              weatherCode: dailyData.weathercode[i],
              maxTemp: dailyData.temperature_2m_max[i],
              minTemp: dailyData.temperature_2m_min[i],
            }}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UpcomingDisplay;
