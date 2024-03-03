function SearchForm(): JSX.Element {
  return (
    <form className="flex items-center gap-x-3">
      <input
        className="flex h-10 w-full flex-1 rounded-md border px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type="search"
        placeholder="Search location"
      />
      <button
        className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-slate-950 px-4 text-sm font-medium text-slate-100 transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
