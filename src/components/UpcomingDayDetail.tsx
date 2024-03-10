import {
  dailyResultUnitData,
  dailyWeatherDataCategory,
} from "../hooks/useFetchWeather";
import { getDayName } from "../utilities/getDayName";
import { getWeatherDescription } from "../utilities/translateWeatherCode";

type UpcomingDayDetailProps = {
  dayWeatherDatum: dailyResultUnitData;
  dailyWeatherUnits: dailyWeatherDataCategory<string>;
};

function UpcomingDayDetail({
  dayWeatherDatum,
  dailyWeatherUnits,
}: UpcomingDayDetailProps): JSX.Element {
  return (
    <tr className="flex justify-between border-b p-4 transition-colors hover:bg-slate-50">
      <td className="font-semibold">{getDayName(dayWeatherDatum.time)}</td>
      <td className="text-xs">
        Max{" "}
        <span className="font-semibold">
          {dayWeatherDatum.maxTemp}
          {dailyWeatherUnits.temperature_2m_max}
        </span>
        , Min{" "}
        <span className="font-semibold">
          {dayWeatherDatum.minTemp}
          {dailyWeatherUnits.temperature_2m_min}
        </span>
        ,{" "}
        {getWeatherDescription(dayWeatherDatum.weatherCode) ||
          `Weather code: ${dayWeatherDatum.weatherCode}`}
      </td>
    </tr>
  );
}

export default UpcomingDayDetail;
