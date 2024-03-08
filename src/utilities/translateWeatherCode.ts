type translatedWeatherCodeData = {
  description: string;
  imageName: weatherSVGName;
};

type weatherSVGName =
  | "Clear sky"
  | "Partly cloudy"
  | "Fog"
  | "Rainy"
  | "Snowy"
  | "Thunderstorm";

const weatherCodeMap = new Map<number[], translatedWeatherCodeData>([
  [[0], { description: "Clear sky", imageName: "Clear sky" }],
  [[1, 2, 3], { description: "Partly cloudy", imageName: "Partly cloudy" }],
  [[45, 48], { description: "Fog", imageName: "Fog" }],
  [[51, 53, 55], { description: "Drizzle", imageName: "Rainy" }],
  [[56, 57], { description: "Freezing drizzle", imageName: "Rainy" }],
  [[61, 63, 65], { description: "Rain", imageName: "Rainy" }],
  [[66, 67], { description: "Freezing rain", imageName: "Rainy" }],
  [[71, 73, 75], { description: "Snow fall", imageName: "Snowy" }],
  [[77], { description: "Snow grains", imageName: "Snowy" }],
  [[80, 81, 82], { description: "Rain showers", imageName: "Rainy" }],
  [[85, 86], { description: "Snow showers", imageName: "Snowy" }],
  [[95], { description: "Thunderstorm", imageName: "Thunderstorm" }],
  [
    [96, 99],
    { description: "Thunderstorm with hail", imageName: "Thunderstorm" },
  ],
]);

function translateWeatherCode(
  weatherCode: number,
): translatedWeatherCodeData | undefined {
  const foundWeatherCodeGroup: number[] | undefined = [
    ...weatherCodeMap.keys(),
  ].find((key) => key.includes(weatherCode));

  if (!foundWeatherCodeGroup) return undefined;
  return weatherCodeMap.get(foundWeatherCodeGroup);
}

function getWeatherDescription(weatherCode: number): string | undefined {
  return translateWeatherCode(weatherCode)?.description;
}

function getWeatherImageName(weatherCode: number): weatherSVGName | undefined {
  return translateWeatherCode(weatherCode)?.imageName;
}

export { getWeatherDescription, getWeatherImageName };

// https://fonts.google.com/icons?icon.query=weather
