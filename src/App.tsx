import Box from "./components/Box";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import CurrentDisplay from "./components/CurrentDisplay";
import UpcomingDisplay from "./components/UpcomingDisplay";
import HorizontalLoader from "./components/HorizontalLoader";
import MessageDisplay from "./components/MessageDisplay";

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
      <Box className="h-[328px] md:h-[357px] lg:h-[399px] xl:h-[328px]">
        <Header>
          <SearchForm handleUpdateQuery={handleUpdateQuery} />
        </Header>
        {isLoading && <HorizontalLoader />}
        {error && <MessageDisplay message={error} />}
        {fetchResult && (
          <CurrentDisplay
            locationData={fetchResult.location}
            currentWeatherData={fetchResult.current.data}
            currentWeatherCode={fetchResult.current.weatherCode}
            isVisible={!isLoading && !error}
          />
        )}
        {!isLoading && !error && !fetchResult && (
          <MessageDisplay
            className="animate-pulse"
            message="Waiting for search"
          />
        )}
      </Box>

      <Box className="h-[387px] md:h-[443px] lg:h-[667px] xl:h-[415px]">
        {(error || isLoading || !fetchResult) && <HorizontalLoader />}
        {fetchResult && (
          <UpcomingDisplay
            dailyWeatherData={fetchResult.daily.data}
            dailyWeatherUnits={fetchResult.daily.units}
            isVisible={!isLoading && !error}
          />
        )}
      </Box>
    </main>
  );
}

export default App;
