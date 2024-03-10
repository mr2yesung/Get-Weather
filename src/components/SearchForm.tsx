import { useInputChangeState } from "../hooks/useInputChangeState";

type SearchFormProps = {
  handleUpdateQuery: (inputText: string) => void;
};

function SearchForm({ handleUpdateQuery }: SearchFormProps): JSX.Element {
  const [inputText, handleInputChange] = useInputChangeState("");

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleUpdateQuery(inputText);
  }

  return (
    <form className="flex items-center gap-x-3" onSubmit={handleFormSubmit}>
      <input
        className="flex h-10 w-full flex-1 rounded-md border px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base lg:h-12 lg:text-xl xl:h-10 xl:text-sm"
        type="search"
        placeholder="Search location"
        value={inputText}
        onChange={handleInputChange}
      />
      <button
        className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-slate-950 px-4 text-sm font-medium text-slate-100 transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:text-base lg:h-11 lg:text-lg xl:h-9 xl:text-sm"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
