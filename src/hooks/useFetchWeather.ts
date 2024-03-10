import { useEffect, useState } from "react";

function useFetchWeather(searchQuery: string): {
  fetchResult: fetchResultData | undefined;
  error: string;
  isLoading: boolean;
} {
  const [fetchResult, setFetchResult] = useState<fetchResultData>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    function () {
      const controller: AbortController = new AbortController();

      async function fetchWeather(): Promise<void> {
        try {
          setIsLoading(true);
          setError("");

          // fetch location
          const locationResponse: Response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}`,
          );
          if (!locationResponse.ok)
            throw new Error(`Fetch response error: ${locationResponse.status}`);

          const locationData: { results?: locationUnitData[] } =
            await locationResponse.json();
          if (!locationData.results) throw new Error("Location not found");

          const { name, latitude, longitude, country_code, timezone } =
            locationData.results[0];

          // fetch weather
          const weatherResponse: Response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min&current=weathercode,temperature_2m,relative_humidity_2m,wind_speed_10m`,
          );
          if (!weatherResponse.ok)
            throw new Error(`Fetch response error: ${weatherResponse.status}`);

          const weatherData: weatherData = await weatherResponse.json();

          // process data
          const locationResult: locationResultData = {
            name: name,
            country_code: country_code,
          };

          const currentResultKeyPairs: {
            [key: string]: keyof weatherData["current_units"];
          } = {
            temp: "temperature_2m",
            humidity: "relative_humidity_2m",
            wind: "wind_speed_10m",
          };
          const currentResult: fetchResultData["current"] = {
            weatherCode: weatherData.current.weathercode,
            data: Object.keys(currentResultKeyPairs).map((key) => {
              return {
                title: key,
                unit: weatherData.current_units[currentResultKeyPairs[key]],
                value: weatherData.current[currentResultKeyPairs[key]],
              };
            }),
          };

          const dailyWeatherData: weatherData["daily"] = weatherData.daily;
          const dailyResult: fetchResultData["daily"] = {
            units: weatherData.daily_units,
            data: dailyWeatherData.time.map((day, i) => {
              return {
                time: day,
                weatherCode: dailyWeatherData.weathercode[i],
                maxTemp: dailyWeatherData.temperature_2m_max[i],
                minTemp: dailyWeatherData.temperature_2m_min[i],
              };
            }),
          };

          // update fetch result
          setFetchResult({
            location: locationResult,
            current: currentResult,
            daily: dailyResult,
          });
        } catch (err) {
          console.error(err);
          if (err instanceof Error) setError(err.message);
          else setError("Something went wrong while fetching weather");
        } finally {
          setIsLoading(false);
        }
      }

      if (!searchQuery) return;

      fetchWeather();

      return function () {
        controller.abort();
      };
    },
    [searchQuery],
  );

  return { fetchResult, error, isLoading };
}

type locationUnitData = locationResultData & {
  latitude: number;
  longitude: number;
  timezone: string;
};

type locationResultData = {
  name: string;
  country_code: string;
};

type weatherData = {
  current_units: currentWeatherDataCategory<string>;
  current: currentWeatherDataCategory<number> & { weathercode: number };
  daily_units: dailyWeatherDataCategory<string>;
  daily: {
    time: string[];
    weathercode: number[];
  } & dailyWeatherDataCategory<number[]>;
};

type currentWeatherDataCategory<T> = {
  temperature_2m: T;
  relative_humidity_2m: T;
  wind_speed_10m: T;
};

type dailyWeatherDataCategory<T> = {
  temperature_2m_max: T;
  temperature_2m_min: T;
};

type fetchResultData = {
  location: locationResultData;
  current: {
    weatherCode: number;
    data: currentResultUnitData[];
  };
  daily: {
    units: dailyWeatherDataCategory<string>;
    data: dailyResultUnitData[];
  };
};

type currentResultUnitData = { title: string; unit: string; value: number };

type dailyResultUnitData = {
  time: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
};

export {
  useFetchWeather,
  type locationResultData,
  type currentResultUnitData,
  type dailyResultUnitData,
  type dailyWeatherDataCategory,
};
