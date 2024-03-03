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

          // update fetch result
          setFetchResult({
            name: name,
            country_code: country_code,
            ...weatherData,
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

type locationUnitData = locationDisplayData & {
  latitude: number;
  longitude: number;
  timezone: string;
};

type locationDisplayData = {
  name: string;
  country_code: string;
};

type weatherData = {
  current_units: currentWeatherData<string>;
  current: currentWeatherData<number> & { weathercode: number };
  daily_units: dailyWeatherData<string>;
  daily: {
    time: string[];
    weathercode: number[];
  } & dailyWeatherData<number[]>;
};

type currentWeatherData<T> = {
  temperature_2m: T;
  relative_humidity_2m: T;
  wind_speed_10m: T;
};

type dailyWeatherData<T> = {
  temperature_2m_max: T;
  temperature_2m_min: T;
};

type fetchResultData = locationDisplayData & weatherData;

export { useFetchWeather };
