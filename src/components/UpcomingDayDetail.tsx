import { dailyWeatherData } from "../hooks/useFetchWeather";
import { getWeatherDescription } from "../utilities/translateWeatherCode";

type UpcomingDayDetailProps = {
  dayName: string;
  units: dailyWeatherData<string>;
  data: { weatherCode: number; maxTemp: number; minTemp: number };
};

function UpcomingDayDetail({
  dayName,
  units,
  data,
}: UpcomingDayDetailProps): JSX.Element {
  return (
    <tr className="flex justify-between border-b p-4 transition-colors hover:bg-slate-50">
      <td className="font-semibold">{dayName}</td>
      <td className="text-xs">
        Max{" "}
        <span className="font-semibold">
          {data.maxTemp}
          {units.temperature_2m_max}
        </span>
        , Min{" "}
        <span className="font-semibold">
          {data.minTemp}
          {units.temperature_2m_min}
        </span>
        , {getWeatherDescription(data.weatherCode) || "Invalid weather code"}
      </td>
    </tr>
  );
}

export default UpcomingDayDetail;
