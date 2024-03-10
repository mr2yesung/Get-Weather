import { currentResultUnitData } from "../hooks/useFetchWeather";

type WeatherVariableDetailProps = {
  currentWeatherDatum: currentResultUnitData;
};

function WeatherVariableDetail({
  currentWeatherDatum,
}: WeatherVariableDetailProps): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-y-1 md:text-lg lg:text-xl xl:text-base">
      <p className="capitalize">{currentWeatherDatum.title}</p>
      <p className="font-semibold tracking-wider">
        {currentWeatherDatum.value}
        {currentWeatherDatum.unit}
      </p>
    </div>
  );
}

export default WeatherVariableDetail;
