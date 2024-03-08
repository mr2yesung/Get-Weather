const weatherCodeMap = new Map<number[], string>([
  [[0], "Clear sky"],
  [[1, 2, 3], "Partly cloudy"],
  [[45, 48], "Fog"],
  [[51, 53, 55], "Drizzle"],
  [[56, 57], "Freezing drizzle"],
  [[61, 63, 65], "Rain"],
  [[66, 67], "Freezing rain"],
  [[71, 73, 75], "Snow fall"],
  [[77], "Snow grains"],
  [[80, 81, 82], "Rain showers"],
  [[85, 86], "Snow showers"],
  [[95], "Thunderstorm"],
  [[96, 99], "Thunderstorm with hail"],
]);

function getWeatherDescription(weatherCode: number): string | undefined {
  const foundWeatherCodeGroup: number[] | undefined = [
    ...weatherCodeMap.keys(),
  ].find((key) => key.includes(weatherCode));

  if (!foundWeatherCodeGroup) return undefined;
  return weatherCodeMap.get(foundWeatherCodeGroup);
}

export { getWeatherDescription };
