type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between gap-x-3 px-4 py-6">
      <h1 className="whitespace-nowrap text-lg font-semibold leading-none tracking-tight md:text-2xl lg:text-3xl xl:text-xl">
        Get Weather
      </h1>
      {children}
    </div>
  );
}

export default Header;
