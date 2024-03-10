import Box from "./components/Box";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import CurrentDisplay from "./components/CurrentDisplay";
import UpcomingDisplay from "./components/UpcomingDisplay";
import HorizontalLoader from "./components/HorizontalLoader";

import { useState } from "react";
import { useFetchWeather } from "./hooks/useFetchWeather";

function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const { fetchResult, error, isLoading } = useFetchWeather(query);

  function handleUpdateQuery(inputText: string): void {
    if (!inputText) return;

    setQuery(inputText);
  }

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-y-6 py-3 font-sans text-slate-950 md:gap-y-8 xl:gap-y-6">
      <Box>
        <Header>
          <SearchForm handleUpdateQuery={handleUpdateQuery} />
        </Header>
        {fetchResult && (
          <CurrentDisplay
            locationData={fetchResult.location}
            currentWeatherData={fetchResult.current.data}
            currentWeatherCode={fetchResult.current.weatherCode}
          />
        )}
      </Box>

      {fetchResult && (
        <Box>
          {isLoading && <HorizontalLoader />}
          <UpcomingDisplay
            dailyWeatherData={fetchResult.daily.data}
            dailyWeatherUnits={fetchResult.daily.units}
            isVisible={!isLoading && !error}
          />
        </Box>
      )}
    </main>
  );
}

export default App;
