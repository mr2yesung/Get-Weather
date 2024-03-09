import { dailyWeatherData } from "../hooks/useFetchWeather";
import { getWeatherDescription } from "../utilities/translateWeatherCode";

type UpcomingDayDetailProps = {
  dayName: string;
  dailyWeatherUnits: dailyWeatherData<string>;
  dayWeatherData: { weatherCode: number; maxTemp: number; minTemp: number };
};

function UpcomingDayDetail({
  dayName,
  dailyWeatherUnits,
  dayWeatherData,
}: UpcomingDayDetailProps): JSX.Element {
  return (
    <tr className="flex justify-between border-b p-4 transition-colors hover:bg-slate-50">
      <td className="font-semibold">{dayName}</td>
      <td className="text-xs">
        Max{" "}
        <span className="font-semibold">
          {dayWeatherData.maxTemp}
          {dailyWeatherUnits.temperature_2m_max}
        </span>
        , Min{" "}
        <span className="font-semibold">
          {dayWeatherData.minTemp}
          {dailyWeatherUnits.temperature_2m_min}
        </span>
        ,{" "}
        {getWeatherDescription(dayWeatherData.weatherCode) ||
          "Invalid weather code"}
      </td>
    </tr>
  );
}

export default UpcomingDayDetail;
