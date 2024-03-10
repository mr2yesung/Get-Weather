type BoxProps = {
  children: React.ReactNode;
};

function Box({ children }: BoxProps): JSX.Element {
  return (
    <div className="relative mx-auto w-full max-w-96 rounded-lg border shadow-sm md:max-w-xl lg:max-w-2xl xl:max-w-md">
      {children}
    </div>
  );
}

export default Box;
