import Box from "./components/Box";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import CurrentDisplay from "./components/CurrentDisplay";
import UpcomingDisplay from "./components/UpcomingDisplay";
import HorizontalLoader from "./components/HorizontalLoader";

import { useEffect, useState } from "react";
import { useFetchWeather } from "./hooks/useFetchWeather";

function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const { fetchResult, error, isLoading } = useFetchWeather(query);

  function handleUpdateQuery(inputText: string): void {
    if (!inputText) return;

    setQuery(inputText);
  }

  useEffect(
    function () {
      console.log(fetchResult);
      console.log(error);
      console.log(isLoading);
    },
    [fetchResult, error, isLoading],
  );

  return (
    <main className="mx-auto mt-12 max-w-2xl space-y-6 font-sans text-slate-950">
      <Box>
        <Header>
          <SearchForm handleUpdateQuery={handleUpdateQuery} />
        </Header>
        <CurrentDisplay />
      </Box>

      {fetchResult && (
        <Box>
          {isLoading && <HorizontalLoader />}
          <UpcomingDisplay
            dailyData={fetchResult.daily}
            dailyUnits={fetchResult.daily_units}
            isVisible={!isLoading && !error}
          />
        </Box>
      )}
    </main>
  );
}

export default App;
