import Box from "./components/Box";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import CurrentDisplay from "./components/CurrentDisplay";
import UpcomingDisplay from "./components/UpcomingDisplay";

function App(): JSX.Element {
  return (
    <main className="mx-auto mt-12 max-w-2xl space-y-6 font-sans text-slate-950">
      <Box>
        <Header>
          <SearchForm />
        </Header>
        <CurrentDisplay />
      </Box>

      <Box>
        <UpcomingDisplay />
      </Box>
    </main>
  );
}

export default App;
