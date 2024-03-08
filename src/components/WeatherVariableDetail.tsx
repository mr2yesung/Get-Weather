type WeatherVariableDetailProps = {
  title: string;
  value: number;
  unit: string;
};

function WeatherVariableDetail({
  title,
  value,
  unit,
}: WeatherVariableDetailProps): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <p>{title}</p>
      <p className="font-semibold">
        {value}
        {unit}
      </p>
    </div>
  );
}

export default WeatherVariableDetail;
